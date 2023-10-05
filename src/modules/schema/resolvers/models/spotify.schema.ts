import { ObjectType, Field } from 'type-graphql';

// TODO: Intentionally keeping descriptions empty

@ObjectType({ description: '' })
class SpotifyExternalURL {
  @Field({ description: '' })
  spotify!: string;
}

@ObjectType({ description: '' })
class SporifyContext {
  @Field(type => SpotifyExternalURL)
  external_urls!: SpotifyExternalURL;

  @Field(type => String, { description: '' })
  href!: String;

  @Field(type => String, { description: '' })
  type!: String;

  @Field(type => String, { description: '' })
  uri!: String;
}

@ObjectType()
class SpotifyArtist {
  @Field({ description: '' })
  id!: string;

  @Field({ description: '' })
  name!: string;

  @Field({ description: '' })
  type!: string;

  @Field({ description: '' })
  href!: string;

  @Field({ description: '' })
  uri!: string;

  @Field(type => SpotifyExternalURL,{ description: '' })
  external_urls!: SpotifyExternalURL
}

@ObjectType()
class SpotifyImage {
  @Field(type => Number, { description: '' })
  height!: Number;

  @Field(type => Number, { description: '' })
  width!: Number;
  
  @Field(type => String, { description: '', defaultValue: '', nullable: false })
  url!: String;
}

@ObjectType()
class SpotifyAlbum {
  @Field({ description: '' })
  id!: string;

  @Field({ description: '' })
  name!: string;

  @Field({ description: '' })
  href!: string;

  @Field({ description: '' })
  album_type!: string;

  @Field({ description: '' })
  type!: string;

  @Field({ description: '' })
  uri!: string;

  @Field(type => [SpotifyArtist])
  artists!: SpotifyArtist[];

  @Field(type => SpotifyExternalURL,{ description: '' })
  external_urls!: SpotifyExternalURL;

  @Field(type => Number, { description: '' })
  total_tracks!: Number;

  @Field(type => [SpotifyImage], { description: '' })
  images!: SpotifyImage[];
}

@ObjectType()
class SpotifyItem {

  @Field(type => String, { description: '' })
  id!: String;

  @Field(type => String, { description: '' })
  href!: String;

  @Field(type => SpotifyExternalURL,{ description: '' })
  external_urls!: SpotifyExternalURL

  @Field(type => SpotifyAlbum, { description: '' })
  album!: SpotifyAlbum;

  @Field(type => String, { description: '' })
  name!: String;

  @Field(type => String, { description: '', nullable: true })
  preview_url!: String;

  @Field(type => String, { description: '' })
  type!: String;

  @Field(type => String, { description: '' })
  uri!: String;

  @Field(type => Boolean, { description: '' })
  is_local!: Boolean;

  @Field(type => Boolean, { description: '' })
  explicit!: Boolean;

  @Field(type => Number, { description: '' })
  popularity!: Number;

  @Field(type => Number, { description: '' })
  track_number!: Number;

  @Field(type => [SpotifyArtist])
  artists!: SpotifyArtist[];
}

@ObjectType({description: "Spotify current playing"})
export class SpotifyCurrentPlaying {
  @Field(type => Number, {nullable: true, defaultValue: 0})
  timestamp!: number;

  @Field(type => Number, {nullable: true, defaultValue: 0})
  progress_ms!: number;

  @Field(type => Boolean, { description: "Is playing on spotify", nullable: true, defaultValue: false })
  is_playing!: boolean;

  @Field({ description: '', nullable: true, defaultValue: '' })
  currently_playing_type!: 'track' | 'episode' | 'ad' | 'unknown';

  @Field(type => SporifyContext, { nullable: true })
  context!: SporifyContext;

  @Field(type => SpotifyItem, { nullable: true })
  item!: SpotifyItem;
}
