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
        showMenu ? "left-[70px] top-[3.5%]" : "left-[190px] top-[3.5%]"
      } ${
        showSideBar ? "-left-[400px]" : "left-0"
      } bg-backgroundIcon absolute w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer border-2 border-[#f6f6f6] transition-all duration-500 ease-linear z-50`}
    >
      <span
        className={`${
          showMenu ? "" : "rotate-180 transition-all duration-300"
        }`}
      >
        <Arrow fill="#B1805E" width={9} />
      </span>
    </div>
  );
}

export default NavBarToggleButton;
