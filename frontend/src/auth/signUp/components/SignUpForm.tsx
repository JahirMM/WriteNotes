"use client";

// ICONS
import Eye from "@/icons/Eye";
import EyeSlash from "@/icons/EyeSlash";
import React, { useState } from "react";

function SignUpForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <section className="p-2 border border-black rounded-xl sm:p-2 sm:border-0 sm:m-auto sm:w-1/2 lg:w-4/12">
      <header className="text-center mb-4">
        <span className="text-4xl font-bold">Create an account</span>
        <p className="text-sm font">Start creating your notes</p>
      </header>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label htmlFor="middleName" className="text-sm">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label htmlFor="middleName" className="text-sm">
              Maternal Last Name
            </label>
            <input
              type="text"
              name="maternalLastName"
              id="maternalLastName"
              placeholder="Maternal last name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="col-start-1 col-end-3">
            <label htmlFor="E-mail" className="block text-sm mb-2">
              E-mail:
            </label>
            <input
              className="text-sm bg-transparent border border-black rounded-xl p-2 w-full focus:outline-none focus:ring-0"
              type="email"
              id="E-mail"
              name="E-mail"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="col-start-1 col-end-3">
            <label htmlFor="password" className="block text-sm">
              Password:
            </label>
            <div className="w-full border border-black rounded-xl flex items-center gap-2">
              <input
                className="text-sm bg-transparent w-full p-2 focus:outline-none focus:ring-0"
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
                    fill="#000"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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
                    fill="#000"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-start-1 col-end-3">
            <label htmlFor="repeatPassword" className="block text-sm">
              Repeat Password:
            </label>
            <div className="w-full border border-black rounded-xl flex items-center gap-2">
              <input
                className="text-sm bg-transparent w-full p-2 focus:outline-none focus:ring-0"
                type={showRepeatPassword ? "text" : "password"}
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Ingresa tu contraseña"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
              {showRepeatPassword ? (
                <div
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="mr-2"
                >
                  <Eye
                    width={20}
                    height={20}
                    fill="#000"
                    aria-label={
                      showRepeatPassword ? "Hide password" : "Show password"
                    }
                  />
                </div>
              ) : (
                <div
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="mr-2"
                >
                  <EyeSlash
                    width={20}
                    height={20}
                    fill="#000"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <button className="bg-black text-white font-bold w-full mt-5 py-3 px-2 rounded-xl col-start-1 col-end-3">
            login
          </button>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
