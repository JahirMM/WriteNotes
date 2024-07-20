"use client";

// COMPONENTS
import NavBarOptions from "./NavBarOptions";

// ICONS
import Logout from "@/icons/Logout";
import Arrow from "@/icons/Arrow";

import { useState } from "react";

function NavBarPage() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div
      className={`${
        showMenu ? " min-w-[216px]" : "min-w-[92px]"
      } relative h-screen flex flex-col gap-5 p-7 transition-all duration-300 shadow-md`}
    >
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="absolute -right-[14px] top-[3.5%] w-7 h-7 rounded-lg flex items-center justify-center bg-backgroundIcon cursor-pointer border-2 border-[#f6f6f6]"
      >
        <span
          className={`${
            showMenu ? "" : "rotate-180 transition-all duration-500"
          }`}
        >
          <Arrow fill="#B1805E" width={9} />
        </span>
      </div>
      <header className="flex gap-5 pb-5 border-b border-[#f6f6f6]">
        <div className="w-11 h-11 rounded-[50%] overflow-hidden">
          <img src="/login/imgLogin.jpg" className="w-full object-cover"></img>
        </div>
        {showMenu && (
          <div>
            <p className="text-[10px] font-medium text-[#757575] bg-transparent">
              USER ACCOUNT
            </p>
            <p className="text-sm font-medium">Jahir Machuca</p>
          </div>
        )}
      </header>
      <nav className="flex-1">
        <section>
          <p
            className={` ${
              showMenu ? "" : "text-center"
            } text-[10px] text-[#757575] mb-[10px] font-medium uppercase`}
          >
            Options
          </p>
          <NavBarOptions showMenu={showMenu} />
        </section>
      </nav>
      <section>
        <p
          className={` ${
            showMenu ? "" : "text-center"
          } text-[10px] text-[#757575] mb-[10px] font-medium uppercase`}
        >
          Account
        </p>
        <ul>
          <li>
            <a
              href="#"
              className={`${
                showMenu ? "" : "relative flex items-center justify-center"
              } flex items-center gap-[10px] text-sm font-medium text-[#757575] py-3 px-2 rounded-lg transition-all duration-300 border border-colorBorder group`}
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
        </ul>
      </section>
    </div>
  );
}

export default NavBarPage;