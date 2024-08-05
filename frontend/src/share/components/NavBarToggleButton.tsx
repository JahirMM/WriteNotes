// ICON
import Arrow from "@/icons/Arrow";

import { Dispatch, SetStateAction } from "react";

function NavBarToggleButton({
  showMenu,
  setShowMenu,
  showSideBar,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  showSideBar: boolean;
}) {
  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className={`${
        showSideBar
          ? "-left-64 sm:left-[70px]"
          : showMenu
          ? "left-[70px]"
          : "left-[190px]"
      } top-[3.5%] bg-backgroundIcon absolute w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer border-2 border-[#f6f6f6] transition-all duration-500 ease-linear z-50`}
    >
      <span
        className={`${
          showMenu ? "" : "rotate-180 transition-all duration-500"
        }`}
      >
        <Arrow fill="#B1805E" width={9} />
      </span>
    </div>
  );
}

export default NavBarToggleButton;
