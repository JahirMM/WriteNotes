// ICONS
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";

interface NavBarChangeThemeProps {
  showMenu: boolean;
  theme: "light" | "dark";
  handleChangeTheme: () => void;
}

function NavBarChangeTheme({
  showMenu,
  theme,
  handleChangeTheme,
}: NavBarChangeThemeProps) {
  return (
    <div>
      <p
        className={`text-[10px] mt-2 text-[#757575] navbar-text-transition uppercase `}
      >
        Theme
      </p>
      <div className="flex items-center justify-between gap-3">
        {!showMenu && (
          <>
            {theme === "light" ? (
              <Moon fill="#000" width={16} />
            ) : (
              <Sun fill="#cec042" width={18} />
            )}
            <span className="text-sm text-colorText whitespace-nowrap dark:text-colorTextDrak dark:font-light">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
          </>
        )}
        <div
          className="min-w-[50px] h-[45px] flex items-center justify-center cursor-pointer"
          onClick={handleChangeTheme}
        >
          <div className="base w-[35px] h-[20px] bg-[#B1805E] rounded-[50px] relative flex items-center dark:bg-[#6F493D]">
            <div
              className={`absolute w-[18px] h-[90%] bg-backgroundIcon rounded-[50%] transition-left duration-300 ease-linear ${
                theme === "light" ? "left-[2px]" : "left-[15px]"
              } dark:bg-[#B1805E]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarChangeTheme;
