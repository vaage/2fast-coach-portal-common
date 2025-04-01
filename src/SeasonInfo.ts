import {Coach} from "./Coach";
import {Track} from "./Track";

export interface SeasonInfoTrackDay {
  date: string;

  track: string; // Track guid
}

export interface SeasonInfo {
  coaches: { [key: string]: Coach };

  tracks: { [key: string]: Track };

  trackDays: { [key: string]: SeasonInfoTrackDay };
}
