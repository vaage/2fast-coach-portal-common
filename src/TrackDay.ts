import {SparseTrackDay} from "./SparseTrackDay";

/**
 * Augments the track day with a self-referencing guid.
 */
export interface TrackDay extends SparseTrackDay{
  /**
   * The guid of the track day. If this guid was used with the season info, it
   * will find this object's date and track.
   */
  guid: string;
}