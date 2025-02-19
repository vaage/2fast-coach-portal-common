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

  coach: {
    firstName: string;

    lastName: string;

    shortBio: string;

    longBio: string;

    rate: number;

    profileImage: string;

    bannerImage: string;
  };

  trackDayGuid: string;

  trackDay: {
    date: string;

    trackGuid: string;

    track: {
      name: string;

      logoImage: string;

      city: string;

      state: string;
    };
  };
}

// Flat structure. No nested types.
export interface RealtimeTrackDay {
  date: string;

  trackGuid: string;

  track: {
    name: string;

    logoImage: string;

    city: string;

    state: string;
  };

  sessions: {
    sessionGuid: string;

    coachGuid: string;

    coach: {
      firstName: string;

      lastName: string;

      shortBio: string;

      longBio: string;

      rate: number;

      profileImage: string;

      bannerImage: string;
    };
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
