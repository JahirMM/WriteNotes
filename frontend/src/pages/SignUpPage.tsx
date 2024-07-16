import SignUpForm from "@/auth/signUp/components/SignUpForm";
import React from "react";

function SignUpPage() {
  return (
    <main className="h-screen flex items-center justify-center sm:gap-4 sm:justify-between">
      <SignUpForm />
      <div className="hidden overflow-auto h-full w-[45%] sm:flex">
        <img
          src="/signUp/imgSignUp.jpg"
          alt="image Sign up"
          className="h-full w-full"
        />
      </div>
    </main>
  );
}

export default SignUpPage;
