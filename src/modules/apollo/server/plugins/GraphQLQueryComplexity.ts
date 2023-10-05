import { ApolloServerPlugin } from '@apollo/server';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator
} from 'graphql-query-complexity';

import { TypeGraphQLIntegratedSchema } from 'src/modules/schema';

export const GraphQLQueryComplexity: ApolloServerPlugin = {
  requestDidStart: async () => ({
    async didResolveOperation({ request, document }) {
      let MAX_COMPLEXITY = 100;
      /**
       * Provides GraphQL query analysis to be able to react on complex queries to the GraphQL server
       * It can be used to protect the GraphQL server against resource exhaustion and DoS attacks
       * More documentation can be found at https://github.com/ivome/graphql-query-complexity
       */
      const complexity = getComplexity({
        // GraphQL schema
        schema: await TypeGraphQLIntegratedSchema(),
        // To calculate query complexity properly,
        // check only the requested operation
        // not the whole document that may contains multiple operations
        operationName: request.operationName,
        // GraphQL query document
        query: document,
        // GraphQL query variables
        variables: request.variables,
        // Add any number of estimators. The estimators are invoked in order, the first
        // numeric value that is being returned by an estimator is used as the field complexity
        // If no estimator returns a value, an exception is raised
        estimators: [
          // Using fieldExtensionsEstimator is mandatory to make it work with type-graphql
          fieldExtensionsEstimator(),
          // Add more estimators here...
          // This will assign each field a complexity of 1
          // if no other estimator returned a value
          simpleEstimator({ defaultComplexity: 1 })
        ]
      });

      // React to the calculated complexity,
      // like compare it with max and throw error when the threshold is reached
      if (complexity > MAX_COMPLEXITY) {
        throw new Error(
          `Sorry, too complicated query! ${complexity} exceeded the maximum allowed complexity of ${MAX_COMPLEXITY}`
        );
      }
      console.log('Used query complexity points:', complexity);
    }
  })
};
