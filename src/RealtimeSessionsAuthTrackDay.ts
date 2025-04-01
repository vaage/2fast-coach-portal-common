import {Track} from "./Track";

export interface RealtimeSessionsAuthTrackDay {
  date: string;

  trackGuid: string;

  track: Track;
}