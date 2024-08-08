// INTERFACE
import { GetUserResponseInterface } from "@/share/interfaces/GetUserResponseInterface";

// COMPONENT
import UserProfileForm from "./UserProfileForm";

// ICON
import Close from "@/icons/Close";

import { Dispatch, SetStateAction } from "react";

interface UserProfileProps {
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
  user: GetUserResponseInterface["user"];
}

function UserProfile({ showProfile, setShowProfile, user }: UserProfileProps) {
  const handleCloseProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div
      className={`${
        showProfile ? "formVisible" : "formHidden"
      } bg-backgroundUserModal rounded-lg relative p-5 max-h-[85%] overflow-auto dark:bg-backgroundUserModalDark`}
    >
      <header className="bg-backgroundPage p-2 flex items-center justify-end dark:bg-backgroundPageDark">
        <button onClick={handleCloseProfile}>
          <Close fill="#FA7268" width={16} className="cursor-pointer" />
        </button>
      </header>
      <section>
        <div className="mb-5 flex flex-col items-center pb-5 border-b border-colorLineSeparatorUser dark:border-colorLineSeparatorUserDark">
          <div className="w-full flex justify-center bg-gradient-to-b from-50% from-backgroundTopUserImage to-50% to-backgroundBottomUserImage dark:from-backgroundTopUserImageDark dark:to-backgroundBottomUserImageDark">
            <img
              src="/login/imgLogin.jpg"
              alt="login image"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <span className="text-sm text-colorText inline-block dark:text-colorTextDrak">
            {user.firstName} {user.middleName}
          </span>
          <span className="text-xs text-colorText inline-block dark:text-colorTextDrak dark:font-light">
            {user.email}
          </span>
        </div>
        <UserProfileForm user={user} />
      </section>
    </div>
  );
}

export default UserProfile;
