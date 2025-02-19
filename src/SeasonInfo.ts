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

export interface SeasonInfoCoach {
  bannerImage: string;

  email: string;

  firstName: string;

  lastName: string;

  longBio: string;

  profileImage: string;

  rate: Number;

  shortBio: string;
}

export interface SeasonInfo {
  coaches: { [key: string]: SeasonInfoCoach };

  tracks: { [key: string]: SeasonInfoTrack };

  trackDays: { [key: string]: SeasonInfoTrackDay };
}
