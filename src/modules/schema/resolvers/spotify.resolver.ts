import { Spotify } from './models/spotify.schema';
import { Query, Resolver } from 'type-graphql';

@Resolver(Spotify)
export class SpotifyResolver {
  @Query(returns => [Spotify])
  async currentPlaying() {
    return await [];
  }
}
