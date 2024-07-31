function UserProfilePhotoUpload() {
  return (
    <div className="flex flex-col justify-between gap-3 pb-5 pt-5 border-b border-t border-gray-200 sm:flex-row md:justify-start md:gap-5">
      <label htmlFor="profilePhoto" className="text-xs">
        Profile Photo
      </label>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <img
          src="/login/imgLogin.jpg"
          alt="Profile"
          className="min-w-14 min-h-14 max-w-14 max-h-14 rounded-full"
        />
        <div>
          <button
            type="button"
            className="bg-white text-xs px-2 py-1 rounded-md border border-colorBorder"
          >
            Click to replace
          </button>
        </div>
        {/* <input type="file" id="profilePhoto" name="profilePhoto" className="hidden" /> */}
      </div>
    </div>
  );
}

export default UserProfilePhotoUpload;
