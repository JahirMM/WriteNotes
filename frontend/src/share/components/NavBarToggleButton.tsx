// ICON
import Arrow from "@/icons/Arrow";

import { Dispatch, SetStateAction } from "react";

function NavBarToggleButton({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className="absolute -right-[14px] top-[3.5%] w-7 h-7 rounded-lg flex items-center justify-center bg-backgroundIcon cursor-pointer border-2 border-[#f6f6f6]"
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
