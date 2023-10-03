import { NextResponse, type NextRequest } from 'next/server';

import { captureException, withScope } from '@sentry/nextjs';

export const revalidate = 0;

/**
 * The function is a reverse proxy for GitHub's GraphQL API, which takes a request, forwards it to the
 * GitHub GraphQL API with the necessary headers and authorization, and returns the response.
 * @param {NextRequest} req - The `req` parameter is an object that represents the incoming request to
 * the reverse proxy function. It contains information about the request, such as headers, body, and
 * URL parameters. In this case, it is of type `NextRequest`, which is specific to the Next.js
 * framework.
 * @returns a Promise that resolves to a NextResponse object.
 */
async function reverseProxyGitHubGraphQL(
  req: NextRequest
): Promise<NextResponse | undefined> {
  try {
    const responseBody = (await req.json()) as BodyInit;
    const res = await fetch(process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
      },
      body: JSON.stringify(responseBody)
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    withScope(scope => {
      scope.setUser({
        ip_address: req.headers.get('x-forwarded-for') as string | undefined
      });
      captureException(e);
    });
  }
}

/**
 * The above function is an asynchronous function that acts as a reverse proxy for making a GET request
 * to the GitHub GraphQL API.
 * @param {NextRequest} request - The `request` parameter is an object that represents the incoming
 * HTTP request. It contains information such as the request method, headers, URL, and body. In this
 * case, it is being passed to the `reverseProxyGitHubGraphQL` function.
 * @returns the result of the `reverseProxyGitHubGraphQL` function, which is awaited using the `await`
 * keyword.
 */
export async function GET(request: NextRequest) {
  return (await reverseProxyGitHubGraphQL(request)) as NextResponse;
}

/**
 * The above function is a TypeScript function that acts as a reverse proxy for making a POST request
 * to the GitHub GraphQL API.
 * @param {NextRequest} request - The `request` parameter is an object that represents the incoming
 * HTTP request. It contains information such as the request method, headers, and body. In this case,
 * it is being passed to the `reverseProxyGitHubGraphQL` function.
 * @returns the result of the `reverseProxyGitHubGraphQL` function, which is awaited using the `await`
 * keyword.
 */
export async function POST(request: NextRequest) {
  return (await reverseProxyGitHubGraphQL(request)) as NextResponse;
}
