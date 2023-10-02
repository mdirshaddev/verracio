import { NextResponse, type NextRequest } from 'next/server';

import { captureException } from '@sentry/nextjs';

export const revalidate = 0;

async function reverseProxyGitHubGraphQL(
  req: NextRequest
): Promise<NextResponse> {
  const responseBody = (await req.json()) as BodyInit;
  const res = await fetch(process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
    body: JSON.stringify(responseBody)
  });

  const data = (await res.json()) as any;

  return NextResponse.json(data as any);
}

export async function GET(request: NextRequest) {
  return await reverseProxyGitHubGraphQL(request);
}

export async function POST(request: NextRequest) {
  return await reverseProxyGitHubGraphQL(request);
}
