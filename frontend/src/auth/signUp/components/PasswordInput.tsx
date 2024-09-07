import Eye from "@/icons/Eye";
import { PasswordInputProps } from "../interfaces/PasswordInputInterface";
import EyeSlash from "@/icons/EyeSlash";

function PasswordInput({
  label,
  name,
  value,
  onChange,
  showPassword,
  setShowPassword,
  required = false,
  error,
  theme,
}: PasswordInputProps) {
  return (
    <div className="col-start-1 col-end-3">
      <label
        htmlFor={name}
        className="block text-sm mb-2 text-colorText dark:text-colorTextDrak dark:font-light"
      >
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <div
        className={`w-full border ${
          error ? "border-red-500" : "border-black dark:border-colorBorder"
        } rounded-xl flex items-center gap-2`}
      >
        <input
          className="text-sm bg-transparent w-full p-2 focus:outline-none focus:ring-0 dark:text-colorTextDrak"
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          required={required}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="mr-2 cursor-pointer"
        >
          {showPassword ? (
            <Eye
              width={20}
              height={20}
              fill={`${theme === "light" ? "#000" : "#B1805E"}`}
            />
          ) : (
            <EyeSlash
              width={20}
              height={20}
              fill={`${theme === "light" ? "#000" : "#B1805E"}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
