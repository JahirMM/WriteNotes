// COMPONENTS
import UserProfilePhotoUpload from "./UserProfilePhotoUpload";
import UserProfileSurnames from "./UserProfileSurnames";
import UserProfileNames from "./UserProfileNames";
import UserProfileEmail from "./UserProfileEmail";

function UserProfileForm() {
  return (
    <form action="" className="flex flex-col gap-3">
      <UserProfileNames />
      <UserProfileSurnames />
      <UserProfileEmail />
      <UserProfilePhotoUpload />
      <div className="flex justify-end">
        <button
          type="submit"
          className="text-sm text-white bg-black px-3 py-2 rounded-xl"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default UserProfileForm;
