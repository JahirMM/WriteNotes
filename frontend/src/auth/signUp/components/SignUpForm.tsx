"use client";

import { useEffect, useState } from "react";

// SONNER
import { toast, Toaster } from "sonner";

// HOOKS
import { useValidateEmail } from "@/share/hooks/useValidateEmail";
import PasswordInput from "./PasswordInput";

import { useRouter } from "next/navigation";
import { useSignUp } from "../hooks/useSignUp";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const { validateEmail } = useValidateEmail();
  const router = useRouter();
  const { mutationSignUp } = useSignUp();

  const [initialData, setInitialData] = useState({
    email: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    maternalLastName: "",
  });

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    if (value.length <= 12) {
      setInitialData({ ...initialData, password: value });
    }
  };

  const handleRepeatPasswordChange = (e: any) => {
    const { value } = e.target;
    setRepeatPassword(value);
  };

  useEffect(() => {
    if (initialData.password !== repeatPassword) {
      return setErrorMessage("Passwords do not match");
    }
    setErrorMessage("");
  }, [repeatPassword, initialData.password]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (initialData.password !== repeatPassword) {
      return setErrorMessage("Passwords do not match");
    }

    setErrorMessage("");

    if (
      !initialData.email ||
      !initialData.password ||
      !initialData.firstName ||
      !initialData.lastName ||
      !initialData.maternalLastName
    ) {
      return toast.error("Please fill in all fields");
    }

    if (!validateEmail(initialData.email)) {
      setErrorEmail(true);
      return toast.error("Please enter a valid email address");
    }

    await mutationSignUp.mutateAsync(initialData);

    initialData.email = "";
    initialData.password = "";
    initialData.firstName = "";
    initialData.middleName = "";
    initialData.lastName = "";
    initialData.maternalLastName = "";
    setRepeatPassword("");
    setErrorEmail(false);
  };

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
              First Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
              required
              value={initialData.firstName}
              onChange={(e) =>
                setInitialData({ ...initialData, firstName: e.target.value })
              }
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
              value={initialData.middleName}
              onChange={(e) =>
                setInitialData({ ...initialData, middleName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm">
              Last Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
              required
              value={initialData.lastName}
              onChange={(e) =>
                setInitialData({ ...initialData, lastName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="middleName" className="text-sm">
              Maternal Last Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="maternalLastName"
              id="maternalLastName"
              placeholder="Maternal last name"
              className="text-sm bg-transparent border border-black w-full rounded-xl p-2 focus:outline-none focus:ring-0"
              required
              value={initialData.maternalLastName}
              onChange={(e) =>
                setInitialData({
                  ...initialData,
                  maternalLastName: e.target.value,
                })
              }
            />
          </div>
          <div className="col-start-1 col-end-3">
            <label htmlFor="E-mail" className="block text-sm mb-2">
              E-mail <span className="text-red-700">*</span>
            </label>
            <input
              className={`${
                errorEmail ? "border-red-500" : "border-black"
              } text-sm bg-transparent border rounded-xl p-2 w-full focus:outline-none focus:ring-0`}
              type="email"
              id="E-mail"
              name="E-mail"
              placeholder="E-mail"
              required
              value={initialData.email}
              onChange={(e) => {
                setInitialData({ ...initialData, email: e.target.value });
                setErrorEmail(!validateEmail(e.target.value));
              }}
            />
          </div>
          <PasswordInput
            label="Password"
            name="password"
            value={initialData.password}
            onChange={handlePasswordChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            required
          />
          <PasswordInput
            label="Repeat Password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            showPassword={showRepeatPassword}
            setShowPassword={setShowRepeatPassword}
            required
            error={errorMessage !== ""}
          />
          {errorMessage && (
            <span className="text-sm text-red-500 col-start-1 col-end-3">
              {errorMessage}
            </span>
          )}
          <button
            onClick={handleSubmit}
            className="bg-black text-white font-bold w-full mt-5 py-3 px-2 rounded-xl col-start-1 col-end-3"
          >
            login
          </button>
          <p className="text-sm text-gray-500 col-start-1 col-end-3">
            Have an account?{" "}
            <span
              className="text-sm text-blue-500 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Login now!
            </span>
          </p>
        </div>
      </form>
      <Toaster position="top-right" richColors closeButton duration={5000} />
    </section>
  );
}

export default SignUpForm;
