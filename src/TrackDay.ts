import {Track} from "./Track";

export interface TrackDay {
  guid: string;

  date: string;

  // Guid to the track. If the caller needs track info, they should use the
  // static file.
  track: string;
}