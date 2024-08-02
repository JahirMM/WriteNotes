// ICON
import Logout from "@/icons/Logout";

import { useLogout } from "../hooks/useLogout";

function NavBarLogout({ showMenu }: { showMenu: boolean }) {
  const { mutationLogout } = useLogout();

  return (
    <li>
      <a
        href="#"
        className={`${
          showMenu ? "" : "relative flex items-center justify-center"
        } flex items-center gap-[10px] text-sm font-medium text-[#757575] py-3 px-2 rounded-lg transition-all duration-300 border border-colorBorder group`}
        onClick={() => mutationLogout.mutate()}
      >
        <Logout fill="#B1805E" width={18} />
        <span
          className={`${
            showMenu
              ? ""
              : "absolute left-[70px] top-1/2 -translate-y-1/2 p-3 rounded text-colorText bg-backgroundIcon hidden transition-all duration-300 after-custom-icon"
          } flex-1 group-hover:flex group-hover:left-[50px] group-hover:opacity-100`}
        >
          Logout
        </span>
      </a>
    </li>
  );
}

export default NavBarLogout;
