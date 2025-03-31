
export interface Customer {
  firstName: string;

  lastName: string;

  email: string;

  telephone: string;

  ridingGroup: string;

  ridingGoal: string;

  // When a customer books a session, this field will be set. That way, it is
  // always possible to find the session they booked.
  session: string;
}