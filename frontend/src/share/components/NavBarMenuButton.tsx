// ICONS
import Close from "@/icons/Close";
import Menu from "@/icons/Menu";

import { Dispatch, SetStateAction } from "react";

interface NavBarMenuButtonProps {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  theme: "light" | "dark";
}

function NavBarMenuButton({
  showSideBar,
  setShowSideBar,
  theme,
}: NavBarMenuButtonProps) {
  return (
    <div
      className="absolute right-[60px] top-[40px] flex justify-center items-center rounded-full cursor-pointer z-50 sm:hidden"
      onClick={() => setShowSideBar(!showSideBar)}
    >
      {showSideBar ? (
        <Menu fill={`${theme === "light" ? "#000" : "#fff"}`} width={18} />
      ) : (
        <Close fill={`${theme === "light" ? "#000" : "#fff"}`} width={18} />
      )}
    </div>
  );
}

export default NavBarMenuButton;
