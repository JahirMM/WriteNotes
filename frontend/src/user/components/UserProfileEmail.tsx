// ICON
import Email from "@/icons/Email";

function UserProfileEmail() {
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
          placeholder="jahir@gmail.com"
          className="bg-transparent text-sm flex-1 py-1 px-2 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
}

export default UserProfileEmail;
