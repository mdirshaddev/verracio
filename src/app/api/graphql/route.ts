import { NextResponse, type NextRequest } from 'next/server';

import { nextIntegratedApolloServerHandler } from 'src/modules/apollo/server/apollo-graphql-server';

export async function GET(request: NextRequest) {
  const response = await nextIntegratedApolloServerHandler(request);
  return response;
}

export async function POST(request: NextRequest) {
  const response = await nextIntegratedApolloServerHandler(request);
  // Set headers
  response.headers.set('access-control-allow-origin', '*');
  return response;
}

export async function OPTIONS(request: NextRequest) {
  const response = NextResponse.json({});
  response.headers.set('access-control-allow-methods', 'POST');
  return response;
}
