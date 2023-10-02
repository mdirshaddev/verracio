import 'reflect-metadata';

import { type NextRequest } from 'next/server';

import { nextIntegratedApolloServerHandler } from 'src/modules/apollo/server/apollo-graphql-server';

export const revalidate = 0;

/**
 * The above function is an async function that handles GET requests by using an integrated Apollo
 * Server handler.
 * @param {NextRequest} request - The `request` parameter is an object that represents the incoming
 * HTTP request. It contains information such as the request method, headers, query parameters, and
 * body. It is used to handle and process the incoming request.
 * @returns The code is returning the result of the `handler` function, which is the response to the
 * `request` passed as an argument.
 */
export async function GET(request: NextRequest) {
  const handler = await nextIntegratedApolloServerHandler();
  return handler(request);
}

/**
 * The above function is a TypeScript code snippet that exports an asynchronous function called POST,
 * which handles HTTP POST requests by using an integrated Apollo Server handler.
 * @param {NextRequest} request - The `request` parameter is an object that represents the incoming
 * HTTP request. It contains information such as the request method, headers, URL, and body. It is used
 * to handle the incoming request and return a response.
 * @returns The code is returning the result of the `handler(request)` function call.
 */
export async function POST(request: NextRequest) {
  const handler = await nextIntegratedApolloServerHandler();
  return handler(request);
}
