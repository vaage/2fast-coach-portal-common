import {Coach} from "./Coach";
import {RealtimeSessionsAuthTrackDay} from "./RealtimeSessionsAuthTrackDay";
import {Customer} from "./Customer";

export interface RealtimeSessionsAuthSession {
  trackDayGuid: string;

  trackDay: RealtimeSessionsAuthTrackDay;

  // Empty when a customer has booked this session.
  customerGuid: string | null;

  // Non-null when a customer has booked this session.
  customer: Customer | null;
}

export interface RealtimeSessionsAuth {
  coachGuid: string;

  coach: Coach;

  // Session GUID to session data.
  sessions: {
    [key: string]: RealtimeSessionsAuthSession;
  };
}
