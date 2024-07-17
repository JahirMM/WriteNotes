export interface SignUpResponseInterface {
  message: string;
  user: {
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    maternalLastName: string;
  };
}
