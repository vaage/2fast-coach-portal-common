import {Customer} from "./Customer";

export interface Session {

  guid: string;

  // The coach's guid. The coach definition is not included here because it can
  // be found in the static data file.
  coach: string;

  // The track day's. The track definition is not included here because it can
  // be found in the static data file.
  trackDay: string;

  // When null, the sessions has not been booked. Website users should never
  // see a session with a customer.
  customer: Customer | null;

  // If the session is not active, it means the coach offered it once before but
  // decided to no longer offer it.
  active: boolean;
}