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
      className={`bg-backgroundIcon h-7 rounded-lg flex items-center justify-center cursor-pointer border-2 border-[#f6f6f6] transition-transform duration-500 ease-linear`}
    >
      <span
        className={`${
          showMenu ? "" : "rotate-180 transition-transform duration-500"
        }`}
      >
        <Arrow fill="#B1805E" width={9} />
      </span>
    </div>
  );
}

export default NavBarToggleButton;
