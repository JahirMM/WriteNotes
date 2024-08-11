// INTERFACE
import { GetUserResponseInterface } from "../interfaces/GetUserResponseInterface";

// COMPONENT
import DefaultUserImage from "./DefaultUserImage";

import { Dispatch, SetStateAction } from "react";

function NavBarHeader({
  showMenu,
  showProfile,
  setShowProfile,
  user,
  domain,
}: {
  showMenu: boolean;
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
  user: GetUserResponseInterface["user"];
  domain: string;
}) {
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <header className="w-full h-16 flex items-center mt-5 portrait:mb-5 landscape:mb-0">
      {user.profilePicture ? (
        <img
          src={`${domain}${user.profilePicture}`}
          className="min-h-11 min-w-11 max-h-11 max-w-11 rounded-[50%] cursor-pointer"
          onClick={handleShowProfile}
        ></img>
      ) : (
        <DefaultUserImage
          dimensionClasses="min-h-11 min-w-11 max-h-11 max-w-11 rounded-[50%]"
          dimensionImageClasses="h-5 w-5"
          handleShowProfile={handleShowProfile}
        />
      )}
      <div onClick={handleShowProfile}>
        <p
          className={`text-[10px] ml-2 text-[#757575] navbar-text-transition ${
            showMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          USER ACCOUNT
        </p>
        <span
          className={`text-sm ml-2 navbar-text-transition text-colorText font-light ${
            showMenu ? "opacity-0" : "opacity-100"
          } dark:text-colorTextDrak`}
        >
          {user.firstName} {user.middleName}
        </span>
      </div>
    </header>
  );
}

export default NavBarHeader;
