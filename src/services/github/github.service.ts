import { GraphQLClient } from 'graphql-request';

/* The GitHubService class provides a method to create a GitHub GraphQL client. */
export class GitHubService {
  public constructor() {}

  /**
   * The function returns a GraphQL client for the GitHub API.
   * @returns an instance of the GraphQLClient class.
   */
  public githubGraphQLClient() {
    const githubGraphQLClient: GraphQLClient = new GraphQLClient('/api/github');
    return githubGraphQLClient;
  }
}
