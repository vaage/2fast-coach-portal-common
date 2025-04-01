import {Coach} from "./Coach";

export interface SeasonInfoTrack {
  city: string;

  logoImage: string;

  name: string;

  state: string;
}

export interface SeasonInfoTrackDay {
  date: string;

  track: string; // Track guid
}

export interface SeasonInfo {
  coaches: { [key: string]: Coach };

  tracks: { [key: string]: SeasonInfoTrack };

  trackDays: { [key: string]: SeasonInfoTrackDay };
}
