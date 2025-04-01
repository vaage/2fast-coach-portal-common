import {Coach} from "./Coach";
import {Track} from "./Track";

export interface SimpleSession {
  active: boolean;

  coach: string;

  trackDay: string;

  // On the server, this can be a string, but when used as a public type, it will always be null.
  customer: null;
}

// Flat structure. No nested types.
export interface RealtimeSession {
  coachGuid: string;

  coach: Coach;

  trackDayGuid: string;

  trackDay: {
    date: string;

    trackGuid: string;

    track: Track;
  };
}

// Flat structure. No nested types.
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

// Flat structure. No nested types.
export interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  ridingGroup: string;
  ridingGoal: string;
}
