// INTERFACE
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

import { ChangeEvent } from "react";

interface UserProfileSurnamesProps {
  initialData: UserProfileInterface;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function UserProfileSurnames({
  initialData,
  handleChange,
}: UserProfileSurnamesProps) {
  return (
    <div className="flex flex-col justify-between gap-3 pb-5 pt-5 border-b border-t border-colorLineSeparatorUser lg:md:flex-row lg:gap-8 dark:border-colorLineSeparatorUserDark">
      <label
        htmlFor="lastName"
        className="text-xs text-colorText dark:text-colorTextDrak dark:font-light"
      >
        Last Name
      </label>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="paternal surname"
          className="text-sm text-colorText py-1 px-2 rounded-md border border-colorBorder bg-transparent focus:outline-none focus:ring-0 dark:text-colorTextDrak"
          value={initialData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="maternalLastName"
          name="maternalLastName"
          placeholder="maternal surname"
          className="text-sm text-colorText py-1 px-2 rounded-md border border-colorBorder bg-transparent focus:outline-none focus:ring-0 dark:text-colorTextDrak"
          value={initialData.maternalLastName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default UserProfileSurnames;
