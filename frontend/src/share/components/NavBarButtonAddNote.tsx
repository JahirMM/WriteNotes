// ICONS
import Plus from "@/icons/Plus";

import Link from "next/link";

function NavBarButtonAddNote({ showMenu }: { showMenu: boolean }) {
  return (
    <Link
      href={"/web/notes?action=create&title=&description=&favorite=false"}
      className="bg-colorTextPointer w-full py-2 flex items-center justify-center rounded-lg mb-2"
    >
      <Plus fill={"#F9F6F3"} width={16} />
      <span
        className={`text-sm text-colorNote navbar-text-transition ${
          showMenu ? "opacity-0 w-0" : "opacity-100 ml-3"
        }`}
      >
        Create note
      </span>
    </Link>
  );
}

export default NavBarButtonAddNote;
