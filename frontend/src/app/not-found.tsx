import NavBarPage from "@/share/components/NavBarPage";

export default function NotFound() {
  return (
    <div>
      <NavBarPage />
      <div className="bg-backgroundSecondary rounded-2xl mt-2 mb-2 mr-3 ml-6 p-5 grid grid-cols-1 h-screen gap-4 sm:ml-20 sm:grid-cols-2 dark:bg-backgroundSecondaryDark">
        <section className="text-center flex flex-col justify-center gap-10 md:gap-12">
          <p className="font-bold text-3xl tracking-wider sm:text-5xl">
            <span className="text-[#5B3D33]">Sorry !,</span>{" "}
            <span className="block md:inline">this page</span>{" "}
            <span className="block md:inline">isn't available</span>
          </p>
          <p className="text-base font-light">
            The page you were looking for couldn't be found
          </p>
        </section>
        <section className="flex justify-center items-center">
          <img
            src="/pageNotFound/404ImgLight.svg"
            alt=""
            className="w-[60%] sm:w-[100%]"
          />
        </section>
      </div>
    </div>
  );
}
