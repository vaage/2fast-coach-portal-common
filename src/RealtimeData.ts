import {Coach} from "./Coach";
import {Track} from "./Track";

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
