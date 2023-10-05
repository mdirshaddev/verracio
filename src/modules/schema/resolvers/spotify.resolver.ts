import { Directive, Query, Resolver } from 'type-graphql';

import { SpotifyCurrentPlaying } from './models/spotify.schema';

import { SpotifyService} from 'src/services/spotify/spotify.service'

@Directive('@cacheControl(maxAge: 180, scope: public)')
@Resolver(SpotifyCurrentPlaying)
export class SpotifyResolver {
  
  private spotifyService: SpotifyService;

  public constructor() {
    this.spotifyService = new SpotifyService()
  }

  @Query(returns => SpotifyCurrentPlaying)
  async currentPlaying() {
    const response = await this.spotifyService.getCurrentPlaying();
    process.env.NODE_ENV === 'development' && console.log(JSON.stringify(response, null, 2))
    return response
  }
}
