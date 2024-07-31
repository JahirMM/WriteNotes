function UserProfileSurnames() {
  return (
    <div className="flex flex-col justify-between gap-3 pb-5 pt-5 border-b border-t border-gray-200 lg:md:flex-row lg:gap-8">
      <label htmlFor="lastName" className="text-xs">
        Last Name
      </label>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Machuca"
          className="text-sm py-1 px-2 rounded-md border border-colorBorder focus:outline-none focus:ring-0"
        />
        <input
          type="text"
          id="secondLastName"
          name="secondLastName"
          placeholder="Martinez"
          className="text-sm py-1 px-2 rounded-md border border-colorBorder focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
}

export default UserProfileSurnames;
