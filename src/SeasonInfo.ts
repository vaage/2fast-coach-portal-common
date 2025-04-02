import {Coach} from "./Coach";
import {Track} from "./Track";
import {SparseTrackDay} from "./SparseTrackDay";

export interface SeasonInfo {
  coaches: { [key: string]: Coach };

  tracks: { [key: string]: Track };

  trackDays: { [key: string]: SparseTrackDay };
}
