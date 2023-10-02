import { gql } from '@apollo/client';

export const CurrentPlaying = gql`
  query CurrentPlaying {
    currentPlaying {
      is_playing
      currently_playing_type
      progress_ms
      timestamp
      context {
        external_urls {
          spotify
        }
        href
        type
        uri
      }
      item {
        album {
          href
          id
          name
          type
          uri
          album_type
          artists {
            id
            name
            type
            href
            uri
            external_urls {
              spotify
            }
          }
          external_urls {
            spotify
          }
          total_tracks
          images {
            height
            width
            url
          }
        }
        name
        preview_url
        type
        uri
        is_local
        explicit
        popularity
        track_number
        external_urls {
          spotify
        }
        id
        href
        artists {
          id
          name
          type
          href
          uri
          external_urls {
            spotify
          }
        }
      }
    }
  }
`;
