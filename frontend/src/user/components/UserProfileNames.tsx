// INTERFACE
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

import { ChangeEvent } from "react";

interface UserProfileNamesProps {
  initialData: UserProfileInterface;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function UserProfileNames({
  initialData,
  handleChange,
}: UserProfileNamesProps) {
  return (
    <div className="flex flex-col justify-between gap-3 lg:md:flex-row lg:gap-8">
      <label
        htmlFor="firstName"
        className="text-xs text-colorText dark:text-colorTextDrak dark:font-light"
      >
        First Name
      </label>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
          className="text-sm text-colorText py-1 px-2 rounded-md border border-colorBorder bg-transparent focus:outline-none focus:ring-0 dark:text-colorTextDrak"
          value={initialData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="middleName"
          name="middleName"
          placeholder="middle name"
          className="text-sm text-colorText py-1 px-2 rounded-md border border-colorBorder bg-transparent focus:outline-none focus:ring-0 dark:text-colorTextDrak"
          value={initialData.middleName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default UserProfileNames;
