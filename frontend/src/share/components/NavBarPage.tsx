"use client";

// COMPONENTS
import UserProfile from "@/user/components/UserProfile";
import NavBarButtonAddNote from "./NavBarButtonAddNote";
import NavBarToggleButton from "./NavBarToggleButton";
import NavBarMenuButton from "./NavBarMenuButton";
import NavBarOptions from "./NavBarOptions";
import NavBarLogout from "./NavBarLogout";
import NavBarHeader from "./NavBarHeader";
import Modal from "./Modal";

// HOOKS
import { useGetUser } from "../hooks/useGetUser";

import { useState } from "react";

function NavBarPage() {
  const [showProfile, setShowProfile] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  const { isError, errorMessage, data } = useGetUser();

  return (
    <>
      <NavBarToggleButton
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSideBar={showSideBar}
      />
      <NavBarMenuButton
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div
        className={`${showMenu ? "w-20" : "w-52 shadow-xl"} ${
          showSideBar ? "-left-64" : "left-0"
        } bg-backgroundPage h-full px-4 py-5 transition-all duration-500 ease-linear fixed overflow-hidden flex flex-col justify-between z-40 sm:left-0`}
      >
        <div>
          <NavBarHeader
            showMenu={showMenu}
            showProfile={showProfile}
            setShowProfile={setShowProfile}
          />
          <NavBarButtonAddNote showMenu={showMenu} />
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollVisible">
          <NavBarOptions showMenu={showMenu} />
        </nav>
        <div>
          <div className="w-full h-[1px] bg-[#f6f6f6]"></div>
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
