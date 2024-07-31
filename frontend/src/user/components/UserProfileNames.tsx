function UserProfileNames() {
  return (
    <div className="flex flex-col justify-between gap-3 lg:md:flex-row lg:gap-8">
      <label htmlFor="firstName" className="text-xs">
        First Name
      </label>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Jahir"
          className="text-sm py-1 px-2 rounded-md border border-colorBorder focus:outline-none focus:ring-0"
        />
        <input
          type="text"
          id="middleName"
          name="middleName"
          placeholder="Jafet"
          className="text-sm py-1 px-2 rounded-md border border-colorBorder focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
}

export default UserProfileNames;
