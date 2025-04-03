import {SparseSession} from "./SparseSession";

export interface CoachSessions {

  /**
   * The coach guid. The coach guid is included to communicate "this coach
   * exists but has no sessions".
   */
  coach: string;

  /**
   * A full session definition is not needed because the remaining data can be
   * found in static data.
   */
  sessions: SparseSession[];
}
