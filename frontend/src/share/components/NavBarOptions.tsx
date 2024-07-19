// ICONS
import NotesMenu from "@/icons/NotesMenu";
import Start from "@/icons/Start";
import Home from "@/icons/Home";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarOptionsProps {
  showMenu: boolean;
}

function NavBarOptions({ showMenu }: NavBarOptionsProps) {
  const pathname = usePathname();

  const options = [
    {
      name: "Home",
      icon: Home,
      path: "/web/dashboard",
      fill: "#B1805E",
      width: 18,
    },
    {
      name: "Favorites",
      icon: Start,
      path: "/web/favoriteNotes",
      fill: "#B1805E",
      width: 18,
    },
    {
      name: "Notes",
      icon: NotesMenu,
      path: "/web/notes",
      fill: "#B1805E",
      width: 14,
    },
  ];
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index} className="relative mb-[5px]">
          <Link
            href={option.path}
            className={`
          ${pathname === option.path ? "bg-backgroundNavBarOption" : ""}
          ${
            showMenu ? "" : "relative flex items-center justify-center"
          } flex items-center gap-[10px] text-colorText text-sm p-2 rounded-lg transition-all duration-300 group hover:bg-backgroundNavBarOption`}
          >
            <span
              className={`${
                pathname === option.path ? "bg-backgroundIcon" : ""
              } h-7 w-7 rounded-full flex items-center justify-center group-hover:bg-backgroundIcon`}
            >
              <option.icon fill={option.fill} width={option.width} />
            </span>
            <span
              className={`
            ${pathname === option.path ? "font-bold " : ""}
            ${
              showMenu
                ? ""
                : "absolute left-[70px] top-1/2 -translate-y-1/2 p-3 rounded text-colorText bg-backgroundIcon hidden transition-all duration-300 after-custom-icon"
            } flex-1 group-hover:flex group-hover:left-[50px] group-hover:opacity-100`}
            >
              {option.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBarOptions;
