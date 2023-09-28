import { URLSearchParams } from 'url';

/**
 * The `SpotifyService` class is responsible for retrieving an access token from Spotify using a
refresh token.
 */
export class SpotifyService {
  /* The `private base64Encoded` property is a string that represents the Spotify client ID and client
  secret encoded in base64 format. It is used for authentication when making requests to the Spotify
  API. The `Buffer.from()` method is used to create a new Buffer object from the concatenated string
  of the client ID and client secret. The `toString('base64')` method is then called on the Buffer
  object to convert it to a base64 encoded string. */
  private base64Encoded: string = Buffer.from(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  /* The `private tokenEndpoint: string = `https://accounts.spotify.com/api/token`;` line of code is
  declaring a private property called `tokenEndpoint` in the `SpotifyService` class. This property
  is of type `string` and is assigned the value `'https://accounts.spotify.com/api/token'`. */
  private tokenEndpoint: string = `https://accounts.spotify.com/api/token`;

  public constructor() {}

  /**
   * The function `getAccessToken` is an asynchronous function that retrieves an access token from
   * Spotify using a refresh token.
   * @returns The function `getAccessToken` returns a Promise that resolves to an object with the
   * following properties:
   */
  private async getAccessToken(): Promise<{
    access_token: string;
    token_type: string;
    expires_at: number;
    scopes: string;
  }> {
    try {
      const response = await fetch(this.tokenEndpoint, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${this.base64Encoded}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams([
          ['grant_type', 'refresh_token'],
          ['refresh_token', process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN]
        ]).toString()
      });
      return (await response.json()) as {
        access_token: string;
        token_type: string;
        expires_at: number;
        scopes: string;
      };
    } catch (err) {
      // TODO: Spotify access token
      throw new Error('Spotify Access Token function is not working');
    }
  }
}
