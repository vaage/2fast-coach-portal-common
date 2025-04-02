import {SparseSession} from "./SparseSession";
import {Coach} from "./Coach";
import {SparseTrackDay} from "./SparseTrackDay";
import {Track} from "./Track";
import {Customer} from "./Customer";

export interface Session extends SparseSession {

  /**
   * The coach implementation. The coach guid is in the base interface.
   */
  coachImpl: Coach;

  /**
   * The sparse track day information, however the sparse values can be resolved
   * within the context of this object.
   */
  trackDayImpl: SparseTrackDay;

  /**
   * Full track information. The track guid can be found in the track day impl.
   */
  trackImpl: Track;

  /**
   * Full customer information.
   */
  customerImpl: Customer | null;
}