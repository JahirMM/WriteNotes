export interface UserProfileInterface {
  firstName: string;
  middleName: string;
  lastName: string;
  maternalLastName: string;
  email: string;
  profilePicture?: File | string | null;
}
