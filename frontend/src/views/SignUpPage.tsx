"use client";

// HOOK
import { useChangeTheme } from "@/share/hooks/useChangeTheme";

// COMPONENT
import SignUpForm from "@/auth/signUp/components/SignUpForm";

function SignUpPage() {
  const { handleChangeTheme, theme } = useChangeTheme();

  return (
    <main className="h-screen flex items-center justify-center sm:gap-4 sm:justify-between">
      <SignUpForm theme={theme} />
      <div className="hidden overflow-auto h-full w-[45%] sm:flex">
        <img
          src="/signUp/imgSignUp.jpg"
          alt="Image Sign up"
          className="h-full w-full"
        />
      </div>
    </main>
  );
}

export default SignUpPage;
