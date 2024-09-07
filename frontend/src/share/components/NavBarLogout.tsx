// ICON
import Logout from "@/icons/Logout";

import { useLogout } from "../hooks/useLogout";

function NavBarLogout({ showMenu }: { showMenu: boolean }) {
  const { mutationLogout } = useLogout();

  return (
    <button
      className="border border-colorBorder w-full py-2 flex items-center justify-center rounded-lg mt-5 mb-5"
      onClick={() => mutationLogout.mutate()}
    >
      <Logout fill="#B1805E" width={18} />
      <span
        className={`text-sm text-colorText whitespace-nowrap transition-opacity duration-300 ease-linear ${
          showMenu ? "opacity-0 w-0" : "opacity-100 ml-3"
        } dark:text-colorTextDrak`}
      >
        Logout
      </span>
    </button>
  );
}

export default NavBarLogout;
