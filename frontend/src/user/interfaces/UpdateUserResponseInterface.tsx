export interface UpdateUserResponseInterface {
  message: string;
  user: {
    firstName: string;
    middleName: string;
    lastName: string;
    maternalLastName: string;
    email: string;
  };
}
