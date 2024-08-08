"use client";

// COMPONENTS
import UserProfile from "@/user/components/UserProfile";
import NavBarButtonAddNote from "./NavBarButtonAddNote";
import NavBarToggleButton from "./NavBarToggleButton";
import NavBarChangeTheme from "./NavBarChangeTheme";
import NavBarMenuButton from "./NavBarMenuButton";
import NavBarOptions from "./NavBarOptions";
import NavBarLogout from "./NavBarLogout";
import NavBarHeader from "./NavBarHeader";
import Modal from "./Modal";

// HOOKS
import { useChangeTheme } from "../hooks/useChangeTheme";
import { useGetUser } from "../hooks/useGetUser";

import { useState } from "react";

function NavBarPage({}) {
  const [showProfile, setShowProfile] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  const { isError, errorMessage, data } = useGetUser();
  const { handleChangeTheme, theme } = useChangeTheme();

  return (
    <>
      <NavBarMenuButton
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div
        className={`${showMenu ? "w-20" : "w-52 shadow-xl"} ${
          showSideBar ? "-left-64" : "left-0"
        } bg-backgroundPage h-full px-4 py-5 transition-all duration-500 ease-linear fixed overflow-hidden flex flex-col justify-between z-40 sm:left-0 dark:bg-backgroundPageDark`}
      >
        <div>
          <NavBarToggleButton
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            theme={theme}
          />
          <NavBarHeader
            showMenu={showMenu}
            showProfile={showProfile}
            setShowProfile={setShowProfile}
          />
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollVisible">
          <NavBarButtonAddNote showMenu={showMenu} />
          <NavBarOptions showMenu={showMenu} theme={theme} />
          <NavBarChangeTheme
            showMenu={showMenu}
            theme={theme}
            handleChangeTheme={handleChangeTheme}
          />
        </nav>
        <div>
          <div className="w-full h-[1px] bg-colorLineSeparator"></div>
          <NavBarLogout showMenu={showMenu} />
        </div>
      </div>
      {showProfile && (
        <Modal>
          {isError ? (
            <div>{errorMessage}</div>
          ) : data?.user ? (
            <UserProfile
              showProfile={showProfile}
              setShowProfile={setShowProfile}
              user={data.user}
            />
          ) : (
            <div>Loading...</div>
          )}
        </Modal>
      )}
    </>
  );
}

export default NavBarPage;
