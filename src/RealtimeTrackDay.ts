import {Track} from "./Track";
import {Coach} from "./Coach";

export interface RealtimeTrackDay {
  date: string;

  trackGuid: string;

  track: Track;

  sessions: {
    sessionGuid: string;

    coachGuid: string;

    coach: Coach;
  }[];
}