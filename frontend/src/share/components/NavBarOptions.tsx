// // ICONS
// import NotesMenu from "@/icons/NotesMenu";
// import Start from "@/icons/Start";
// import Home from "@/icons/Home";

// import { usePathname } from "next/navigation";
// import Link from "next/link";

// interface NavBarOptionsProps {
//   showMenu: boolean;
//   theme: "light" | "dark";
// }

// function NavBarOptions({ showMenu, theme }: NavBarOptionsProps) {
//   const pathname = usePathname();

//   const options = [
//     {
//       name: "Home",
//       icon: Home,
//       path: "/web/dashboard",
//       fill: "#B1805E",
//       fillDrak: "#6F493D",
//       width: 18,
//     },
//     {
//       name: "Favorites",
//       icon: Start,
//       path: "/web/favoriteNotes",
//       fill: "#B1805E",
//       fillDrak: "#6F493D",
//       width: 18,
//     },
//     {
//       name: "Notes",
//       icon: NotesMenu,
//       path: "/web/notes",
//       fill: "#B1805E",
//       fillDrak: "#6F493D",
//       width: 14,
//     },
//   ];
//   return (
//     <ul className="flex flex-col gap-2">
//       <p
//         className={`text-[10px] mt-5 text-[#757575] navbar-text-transition uppercase ${
//           showMenu ? "opacity-0 hidden" : "opacity-100"
//         }`}
//       >
//         Navigation
//       </p>
//       {options.map((option, index) => (
//         <li className="flex" key={index}>
//           <Link
//             href={option.path}
//             className={`p-2 w-full flex items-center rounded-lg ${
//               showMenu ? "justify-center" : "gap-2"
//             } ${
//               pathname === option.path ? "bg-backgroundNavBarOption" : ""
//             } group hover:bg-backgroundNavBarOption`}
//           >
//             <span
//               className={`min-h-9 min-w-9 rounded-full flex items-center justify-center transition-colors duration-500 ease-linear ${
//                 pathname === option.path ? "bg-backgroundIcon" : ""
//               } group-hover:bg-backgroundIcon`}
//             >
//               <option.icon
//                 fill={theme === "light" ? option.fill : option.fillDrak}
//                 width={option.width}
//               />
//             </span>
//             <span
//               className={`text-sm navbar-text-transition ${
//                 showMenu ? "opacity-0 w-0" : "opacity-100"
//               } ${pathname === option.path ? "font-semibold " : ""}`}
//             >
//               {option.name}
//             </span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default NavBarOptions;

// ICONS
import NotesMenu from "@/icons/NotesMenu";
import Start from "@/icons/Start";
import Home from "@/icons/Home";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarOptionsProps {
  showMenu: boolean;
  theme: "light" | "dark";
}

function NavBarOptions({ showMenu, theme }: NavBarOptionsProps) {
  const pathname = usePathname();

  const options = [
    {
      name: "Home",
      icon: Home,
      path: "/web/dashboard",
      fill: "#B1805E",
      fillDark: "#6F493D",
      width: 18,
    },
    {
      name: "Favorites",
      icon: Start,
      path: "/web/favoriteNotes",
      fill: "#B1805E",
      fillDark: "#6F493D",
      width: 18,
    },
    {
      name: "Notes",
      icon: NotesMenu,
      path: "/web/notes",
      fill: "#B1805E",
      fillDark: "#6F493D",
      width: 14,
    },
  ];

  return (
    <ul className="flex flex-col gap-2">
      <p
        className={`text-[10px] mt-5 text-[#757575] navbar-text-transition uppercase ${
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
              pathname === option.path
                ? "bg-backgroundNavBarOption dark:bg-backgroundNavBarOptionDark"
                : ""
            } group hover:bg-backgroundNavBarOption dark:hover:bg-backgroundNavBarOptionDark`}
          >
            <span
              className={`min-h-9 min-w-9 rounded-full flex items-center justify-center transition-colors duration-500 ease-linear ${
                pathname === option.path
                  ? "bg-backgroundIcon dark:bg-backgroundIconDark"
                  : ""
              } group-hover:bg-backgroundIcon dark:group-hover:bg-backgroundIconDark`}
            >
              <option.icon
                fill={theme === "light" ? option.fill : option.fillDark}
                width={option.width}
              />
            </span>
            <span
              className={`text-sm text-colorText navbar-text-transition ${
                showMenu ? "opacity-0 w-0" : "opacity-100"
              } ${
                pathname === option.path ? "font-semibold " : "dark:font-light"
              } dark:text-colorTextDrak`}
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
