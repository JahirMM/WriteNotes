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
      <p
        className={`text-[10px] mb-2 mt-5 text-[#757575] navbar-text-transition uppercase ${
          showMenu ? "opacity-0 hidden" : "opacity-100"
        }`}
      >
        Navigation
      </p>
      {options.map((option, index) => (
        <li className="flex" key={index}>
          <Link
            href={option.path}
            className={`p-2 w-full flex items-center rounded-lg ${
              showMenu ? "justify-center" : "gap-2"
            } ${
              pathname === option.path ? "bg-backgroundNavBarOption" : ""
            } group hover:bg-backgroundNavBarOption`}
          >
            <span
              className={`min-h-9 min-w-9 rounded-full flex items-center justify-center transition-colors duration-500 ease-linear ${
                pathname === option.path ? "bg-backgroundIcon" : ""
              } group-hover:bg-backgroundIcon`}
            >
              <option.icon
                fill={option.fill}
                width={option.width}
                className=""
              />
            </span>
            <span
              className={`text-sm navbar-text-transition ${
                showMenu ? "opacity-0 w-0" : "opacity-100"
              } ${pathname === option.path ? "font-semibold " : ""}`}
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
