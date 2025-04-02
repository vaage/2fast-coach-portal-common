/**
 * An incomplete track day definition. The track information is located else
 * where (this is a GUID).
 */
export interface SparseTrackDay {

  date: string;

  /**
   * The track's guid. Sparse track days are used in season info, which also
   * contains the track definitions.
   */
  track: string;
}