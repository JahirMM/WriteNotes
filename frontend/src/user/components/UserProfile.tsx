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
      } bg-white rounded-lg relative p-5 min-w-1/2 max-w-[500px] min-h-[250px] max-h-[600px] overflow-auto md:max-h-[632px]`}
    >
      <header className="bg-backgroundPage p-2 flex items-center justify-end">
        <button onClick={handleCloseProfile}>
          <Close fill="#FA7268" width={16} className="cursor-pointer" />
        </button>
      </header>
      <section>
        <div className="mb-5 flex flex-col items-center pb-5 border-b border-gray-200">
          <div className="w-full flex justify-center bg-gradient-to-b from-50% from-[#F3EDE5] to-50% to-white">
            <img
              src="/login/imgLogin.jpg"
              alt="login image"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <span className="text-sm inline-block">{user.firstName}</span>
          <span className="text-xs inline-block">{user.email}</span>
        </div>
        <UserProfileForm user={user} />
      </section>
    </div>
  );
}

export default UserProfile;
