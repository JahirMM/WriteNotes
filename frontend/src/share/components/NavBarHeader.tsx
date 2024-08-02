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
    <header className="flex gap-5 pb-5 border-b border-[#f6f6f6]">
      <div
        className="w-11 h-11 rounded-[50%] overflow-hidden cursor-pointer"
        onClick={handleShowProfile}
      >
        <img src="/login/imgLogin.jpg" className="w-full object-cover"></img>
      </div>
      {showMenu && (
        <div className="cursor-pointer" onClick={handleShowProfile}>
          <p className="text-[10px] font-medium text-[#757575] bg-transparent">
            USER ACCOUNT
          </p>
          <p className="text-sm font-medium">Jahir Machuca</p>
        </div>
      )}
    </header>
  );
}

export default NavBarHeader;
