// ICONS
import Plus from "@/icons/Plus";

import Link from "next/link";

function NavBarButtonAddNote({ showMenu }: { showMenu: boolean }) {
  return (
    <Link
      href={"/web/notes?action=create&title=&description=&favorite=false"}
      className="bg-colorTextPointer py-2 rounded-md flex gap-3 items-center justify-center"
    >
      <Plus fill={"#F9F6F3"} width={16} />
      <span className={`${showMenu ? "" : "hidden"} text-sm text-colorNote`}>
        Create note
      </span>
    </Link>
  );
}

export default NavBarButtonAddNote;
