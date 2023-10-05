import { ApolloServerPlugin } from '@apollo/server';
import * as Sentry from '@sentry/nextjs';

export const SentryObservability: ApolloServerPlugin = {
  // server lifecycle event
  async requestDidStart(ctx) {
    /* Within this returned object, define functions that respond
           to request-specific lifecycle events. */
    return {
      async didEncounterErrors(ctx) {
        // If we couldn't parse the operation (usually invalid queries)
        if (!ctx.operation) {
          for (const err of ctx.errors) {
            Sentry.withScope(scope => {
              scope.setExtra('query', ctx.request.query);
              Sentry.captureException(err);
            });
          }
          return;
        }

        for (const err of ctx.errors) {
          // Add scoped report details and send to Sentry
          Sentry.withScope(scope => {
            // Annotate whether failing operation was query/mutation/subscription
            scope.setTag('kind', ctx.operation?.operation);

            // Log query and variables as extras (make sure to strip out sensitive data!)
            scope.setExtra('query', ctx.request.query);
            scope.setExtra('variables', ctx.request.variables);

            if (err.path) {
              // We can also add the path as breadcrumb
              scope.addBreadcrumb({
                category: 'query-path',
                message: err.path.join(' > '),
                level: 'debug'
              });
            }

            const transactionId =
              ctx.request.http?.headers.get('x-transaction-id');
            if (transactionId) {
              scope.setTransactionName(transactionId);
            }

            Sentry.captureException(err);
          });
        }
      }
    };
  }
};
