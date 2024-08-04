import { Dispatch, SetStateAction } from "react";

function NavBarHeader({
  showMenu,
  showProfile,
  setShowProfile,
}: {
  showMenu: boolean;
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}) {
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <header className="w-full h-16 flex items-center">
      <img
        src="/login/imgLogin.jpg"
        className="min-h-11 min-w-11 max-h-11 max-w-11 rounded-[50%] cursor-pointer"
        onClick={handleShowProfile}
      ></img>
      <div onClick={handleShowProfile}>
        <p
          className={`text-[10px] ml-2 text-[#757575] navbar-text-transition ${
            showMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          USER ACCOUNT
        </p>
        <span
          className={`text-sm ml-2 navbar-text-transition ${
            showMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          Jahir Machuca
        </span>
      </div>
    </header>
  );
}

export default NavBarHeader;
