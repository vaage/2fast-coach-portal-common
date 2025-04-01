
export interface Customer {

  firstName: string;

  lastName: string;

  email: string;

  telephone: string;

  ridingGroup: string;

  ridingGoal: string;

  /**
   * The session the customer booked. If the customer fails to book the session,
   * they'll appear with no session (null).
   */
  session: string | null | undefined;
}