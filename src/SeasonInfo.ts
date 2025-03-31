export interface Track {
  city: string;

  logoImage: string;

  name: string;

  state: string;
}

export interface SeasonInfoTrackDay {
  date: string;

  track: string; // Track guid
}

export interface Coach {
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
  coaches: { [key: string]: Coach };

  tracks: { [key: string]: Track };

  trackDays: { [key: string]: SeasonInfoTrackDay };
}
