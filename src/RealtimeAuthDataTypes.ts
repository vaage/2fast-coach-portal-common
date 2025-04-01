import {Coach} from "./Coach";
import {Track} from "./Track";

export interface RealtimeSessionsAuthCustomer {
  firstName: string;

  lastName: string;

  email: string;

  telephone: string;

  ridingGroup: string;

  ridingGoal: string;
}

export interface RealtimeSessionsAuthTrackDay {
  date: string;

  trackGuid: string;

  track: Track;
}

export interface RealtimeSessionsAuthSession {
  trackDayGuid: string;

  trackDay: RealtimeSessionsAuthTrackDay;

  // Empty when a customer has booked this session.
  customerGuid: string | null;

  // Non-null when a customer has booked this session.
  customer: RealtimeSessionsAuthCustomer | null;
}

export interface RealtimeSessionsAuth {
  coachGuid: string;

  coach: Coach;

  // Session GUID to session data.
  sessions: {
    [key: string]: RealtimeSessionsAuthSession;
  };
}
