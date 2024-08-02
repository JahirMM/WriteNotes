"use client";

// COMPONENTS
import UserProfile from "@/user/components/UserProfile";
import NavBarToggleButton from "./NavBarToggleButton";
import NavBarOptions from "./NavBarOptions";
import NavBarLogout from "./NavBarLogout";
import NavBarHeader from "./NavBarHeader";
import Modal from "./Modal";

// HOOKS
import { useGetUser } from "../hooks/useGetUser";

import { useState } from "react";

function NavBarPage() {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { isError, errorMessage, data } = useGetUser();

  return (
    <div
      className={`${
        showMenu ? " min-w-[216px]" : "min-w-[92px]"
      } fixed h-screen flex flex-col gap-5 p-7 transition-all duration-300 shadow-md bg-backgroundPage z-50`}
    >
      <NavBarToggleButton showMenu={showMenu} setShowMenu={setShowMenu} />
      <NavBarHeader
        showMenu={showMenu}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
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
          <NavBarLogout showMenu={showMenu} />
        </ul>
      </section>
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
    </div>
  );
}

export default NavBarPage;
