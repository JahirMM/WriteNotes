"use client";

// HOOK
import { useChangeTheme } from "@/share/hooks/useChangeTheme";

// COMPONENT
import NavBarPage from "@/share/components/NavBarPage";

export default function NotFound() {
  const { theme } = useChangeTheme();
  return (
    <div>
      <NavBarPage />
      <div className="bg-backgroundSecondary rounded-2xl mt-2 mb-2 mr-3 ml-6 p-5 grid grid-cols-1 h-screen gap-4 sm:ml-20 sm:grid-cols-2 dark:bg-backgroundSecondaryDark">
        <section className="text-center flex flex-col justify-center gap-10 md:gap-12">
          <p className="font-bold text-3xl tracking-wider sm:text-5xl">
            <span className="text-[#5B3D33] dark:text-[#B1805E]">Sorry !,</span>{" "}
            <span className="text-colorText block md:inline dark:text-colorTextDrak">
              this page
            </span>{" "}
            <span className="text-colorText block md:inline dark:text-colorTextDrak">
              isn&apos;t available
            </span>
          </p>
          <p className="text-base font-light text-colorText dark:text-colorTextDrak">
            The page you were looking for couldn&apos;t be found
          </p>
        </section>
        <section className="flex justify-center items-center">
          {theme === "light" ? (
            <img
              src="/pageNotFound/404ImgLight.svg"
              alt="404 image in light mode"
              className="w-[60%] sm:w-[100%]"
            />
          ) : (
            <img
              src="/pageNotFound/404ImgDark.svg"
              alt="404 image in dark mode"
              className="w-[60%] sm:w-[100%]"
            />
          )}
        </section>
      </div>
    </div>
  );
}
