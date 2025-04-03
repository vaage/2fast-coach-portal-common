
export interface BookingRequest {
  /**
   * A customer's first name.
   */
  firstName: string;

  /**
   * A customer's last name.
   */
  lastName: string;

  /**
   * A customer's email.
   */
  email: string;

  /**
   * A customer's phone number.
   */
  telephone: string;

  /**
   * The riding group that the customer is planning on riding in.
   */
  ridingGroup: string;

  /**
   * The customer's goals for the day.
   */
  ridingGoal: string;
}