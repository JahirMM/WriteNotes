"use client";
// COMPONENT
import LoginForm from "@/auth/login/components/LoginForm";

// HOOK
import { useChangeTheme } from "@/share/hooks/useChangeTheme";

// ICON
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";

function LoginPage() {
  const { handleChangeTheme, theme } = useChangeTheme();
  return (
    <main className="h-screen flex items-center justify-center sm:gap-4 sm:justify-between">
      <div className="hidden overflow-auto h-full w-1/2 sm:flex">
        <img
          src="/login/imgLogin.jpg"
          alt="login image"
          className="h-full w-full"
        />
      </div>
      <LoginForm theme={theme} />
      <div
        className="absolute top-4 right-4"
        typeof="submit"
        onClick={handleChangeTheme}
      >
        {theme === "light" ? (
          <Moon width={20} height={20} fill="#000" />
        ) : (
          <Sun width={20} height={20} fill="#b3b542" />
        )}
      </div>
    </main>
  );
}

export default LoginPage;
