export interface UserInterface {
  userId?: string;
  email: string;
  password?: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  maternalLastName: string;
  profilePicture: string | null;
}
