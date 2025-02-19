export interface RealtimeSessionAuthCoach {
  firstName: string;

  lastName: string;

  shortBio: string;

  longBio: string;

  rate: number;

  profileImage: string;

  bannerImage: string;
}

export interface RealtimeSessionsAuthCustomer {
  firstName: string;

  lastName: string;

  email: string;

  telephone: string;

  ridingGroup: string;

  ridingGoal: string;
}

export interface RealtimeSessionsAuthTrack {
  name: string;

  logoImage: string;

  city: string;

  state: string;
}

export interface RealtimeSessionsAuthTrackDay {
  date: string;

  trackGuid: string;

  track: RealtimeSessionsAuthTrack;
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

  coach: RealtimeSessionAuthCoach;

  // Session GUID to session data.
  sessions: {
    [key: string]: RealtimeSessionsAuthSession;
  };
}
