export interface SparseSession {

  guid: string;

  // The coach's guid. The coach definition is not included here because it can
  // be found in the static data file.
  coach: string;

  // The track day's. The track definition is not included here because it can
  // be found in the static data file.
  trackDay: string;

  /**
   * When null, the session has not been booked by a customer. The customer
   * field should always be null when viewed by public viewers.
   */
  customer: string | null;

  // If the session is not active, it means the coach offered it once before but
  // decided to no longer offer it.
  active: boolean;
}