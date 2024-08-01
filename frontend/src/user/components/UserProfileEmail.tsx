// INTERFACE
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

// ICON
import Email from "@/icons/Email";

import { ChangeEvent } from "react";

interface UserProfileEmailProps {
  initialData: UserProfileInterface;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function UserProfileEmail({
  initialData,
  handleChange,
}: UserProfileEmailProps) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-0">
      <label htmlFor="email" className="text-xs">
        Email Address
      </label>
      <div className="lg:col-start-2 lg:col-end-6 border border-colorBorder rounded-md px-2 flex items-center">
        <Email fill="#000" width={16} className="hidden sm:inline-block" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className="bg-transparent text-sm flex-1 py-1 px-2 focus:outline-none focus:ring-0"
          value={initialData.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default UserProfileEmail;
