function NavBarHeaderSkeleton({ showMenu }: { showMenu: boolean }) {
  return (
    <header className="w-full h-16 flex items-center mt-5 portrait:mb-5 landscape:mb-0 animate-pulse">
      <div className="bg-backgroundSecondary min-h-11 min-w-11 max-h-11 max-w-11 rounded-[50%]"></div>
      <div>
        <p
          className={`text-[10px] ml-2 text-[#757575] navbar-text-transition ${
            showMenu ? "opacity-0" : "opacity-100"
          } `}
        >
          USER ACCOUNT
        </p>
        <div
          className={`bg-backgroundSecondary h-3 ml-2 rounded-xl transition-all duration-3000 ease-linear ${
            showMenu ? "w-0" : "w-28"
          }`}
        ></div>
      </div>
    </header>
  );
}

export default NavBarHeaderSkeleton;
