"use client";

import { useState } from "react";

// ICONS
import Eye from "@/icons/Eye";
import EyeSlash from "@/icons/EyeSlash";

// SONNER
import { toast, Toaster } from "sonner";
import { useValidateEmail } from "@/share/hooks/useValidateEmail";

// HOOKS
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  theme: "light" | "dark";
}

function LoginForm({ theme }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { validateEmail } = useValidateEmail();
  const { mutationLogin } = useLogin();
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill in all fields");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address");
    }

    await mutationLogin.mutate({ email, password });
  };

  return (
    <section className="p-5 border border-black rounded-xl sm:p-2 sm:border-0 sm:m-auto sm:w-1/2 lg:w-4/12">
      <header className="mb-9">
        <h1 className="font-bold text-colorText text-4xl tracking-wide md:text-5xl dark:text-colorTextDrak">
          WriteNote
        </h1>
        <p className="text-sm text-colorText mt-9 dark:text-colorTextDrak dark:font-light">
          Don&apos;t have an account?{"  "}
          <span
            className="underline cursor-pointer dark:text-colorTextDrak dark:font-light"
            onClick={() => router.push("/signUp")}
          >
            Create a new account
          </span>
        </p>
      </header>
      <form>
        <label
          htmlFor="E-mail"
          className="block text-colorText text-sm mb-2 dark:text-colorTextDrak dark:font-light"
        >
          E-mail:
        </label>
        <input
          className="text-sm text-colorText bg-transparent border border-black w-full rounded-xl p-2 mb-9 focus:outline-none focus:ring-0 dark:text-colorTextDrak dark:border-colorBorder"
          type="email"
          id="E-mail"
          name="E-mail"
          placeholder="Ingresa tu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label
          htmlFor="password"
          className="block text-colorText text-sm mb-2 dark:text-colorTextDrak dark:font-light"
        >
          Password:
        </label>
        <div className="mb-9 border border-black rounded-xl flex items-center gap-2 dark:border-colorBorder">
          <input
            className="text-sm text-colorText bg-transparent w-full p-2 focus:outline-none focus:ring-0 dark:text-colorTextDrak"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showPassword ? (
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="mr-2"
            >
              <Eye
                width={20}
                height={20}
                fill={`${theme === "light" ? "#000" : "#B1805E"}`}
                aria-label={showPassword ? "Hide password" : "Show password"}
              />
            </div>
          ) : (
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="mr-2"
            >
              <EyeSlash
                width={20}
                height={20}
                fill={`${theme === "light" ? "#000" : "#B1805E"}`}
                aria-label={showPassword ? "Hide password" : "Show password"}
              />
            </div>
          )}
        </div>
        <button
          className="bg-black text-white font-bold w-full py-3 px-2 rounded-xl dark:bg-backgroundNavBarOptionDark"
          onClick={handleSubmit}
        >
          login
        </button>
      </form>
      <Toaster position="top-right" richColors closeButton duration={3000} />
    </section>
  );
}

export default LoginForm;
