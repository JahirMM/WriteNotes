import Arrow from "@/icons/Arrow";
import { Dispatch, SetStateAction } from "react";

function NavBarToggleButton({
  showMenu,
  setShowMenu,
  theme,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  theme: "light" | "dark";
}) {
  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className={`bg-backgroundIcon h-7 rounded-lg flex items-center justify-center cursor-pointer border-2 border-[#f6f6f6] transition-transform duration-500 ease-linear dark:bg-backgroundIconDark`}
    >
      <span
        className={`transition-transform duration-500 ${
          showMenu ? "" : "rotate-180"
        }`}
      >
        <Arrow
          fill={`${theme === "light" ? "#B1805E" : "#6F493D"}`}
          width={9}
        />
      </span>
    </div>
  );
}

export default NavBarToggleButton;
