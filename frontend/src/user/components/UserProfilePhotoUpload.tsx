// INTERFACE
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

// HOOK
import { useUpdateUserPhoto } from "../hooks/useUpdateUserPhoto";

import { Dispatch, SetStateAction } from "react";

interface UserProfilePhotoUploadProps {
  domain: string;
  setInitialData: Dispatch<SetStateAction<UserProfileInterface>>;
  initialData: UserProfileInterface;
}

function UserProfilePhotoUpload({
  domain,
  setInitialData,
  initialData,
}: UserProfilePhotoUploadProps) {
  const inputId = `fileInput-${initialData.email}`;
  const { updateUserPhotoMutation } = useUpdateUserPhoto();

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("profilePicture", file);

    const response = await updateUserPhotoMutation.mutateAsync(formData);

    return setInitialData({
      ...initialData,
      profilePicture: response.profilePicture,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file && file.type.startsWith("image/")) {
      uploadImage(file);
    } else {
      alert("Please select a valid image file.");
    }

    e.target.value = "";
  };

  return (
    <div className="flex flex-col justify-between gap-3 pb-5 pt-5 border-b border-t border-colorLineSeparatorUser sm:flex-row md:justify-start md:gap-5 dark:border-colorLineSeparatorUserDark">
      <label
        htmlFor="profilePhoto"
        className="text-xs text-colorText dark:text-colorTextDrak dark:font-light"
      >
        Profile Photo
      </label>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <img
          src={`${domain}${initialData.profilePicture}`}
          alt="User Profile"
          className="min-w-14 min-h-14 max-w-14 max-h-14 rounded-full"
        />
        <div>
          <button
            type="button"
            className="bg-white text-xs px-2 py-1 rounded-md border border-colorBorder"
            onClick={() => {
              const inputElement = document.getElementById(
                inputId
              ) as HTMLInputElement;
              if (inputElement) {
                inputElement.click();
              }
            }}
          >
            Click to replace
          </button>
        </div>
        <input
          id={inputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}

export default UserProfilePhotoUpload;
