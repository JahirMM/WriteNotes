// ICONS
import Close from "@/icons/Close";
import Menu from "@/icons/Menu";

import { Dispatch, SetStateAction } from "react";

interface NavBarMenuButtonProps {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

function NavBarMenuButton({
  showSideBar,
  setShowSideBar,
}: NavBarMenuButtonProps) {
  return (
    <div
      className="absolute right-[60px] top-[40px] flex justify-center items-center rounded-full cursor-pointer z-50 sm:hidden"
      onClick={() => setShowSideBar(!showSideBar)}
    >
      {showSideBar ? (
        <Menu fill="#000" width={18} />
      ) : (
        <Close fill="#000" width={18} />
      )}
    </div>
  );
}

export default NavBarMenuButton;
