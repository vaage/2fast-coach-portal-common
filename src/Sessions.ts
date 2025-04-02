import {SparseSession} from "./SparseSession";

// Some group of sessions. This can be used to return available sessions to the
// main website view, or used to return a coach's active sessions (coach's
// dashboard).
export interface Sessions {
  sessions: SparseSession[]
}
