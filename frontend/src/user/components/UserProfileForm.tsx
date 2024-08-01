// INTERFACE
import { FieldRulesInterface } from "@/share/interfaces/FieldRulesInterface";
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

// COMPONENTS
import UserProfilePhotoUpload from "./UserProfilePhotoUpload";
import UserProfileSurnames from "./UserProfileSurnames";
import UserProfileNames from "./UserProfileNames";
import UserProfileEmail from "./UserProfileEmail";

// HOOK
import { useValidateEmail } from "@/share/hooks/useValidateEmail";
import { useValidateField } from "@/share/hooks/useValidateField";

// SONNER
import { toast } from "sonner";

import { ChangeEvent, useState } from "react";

function UserProfileForm() {
  const { validateEmail } = useValidateEmail();

  const [initialData, setInitialData] = useState<UserProfileInterface>({
    firstName: "",
    middleName: "",
    lastName: "",
    maternalLastName: "",
    email: "",
  });

  const configs: Record<string, FieldRulesInterface> = {
    email: {
      maxLength: 260,
    },
    firstName: {
      maxLength: 60,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' -]*$/,
    },
    middleName: {
      maxLength: 60,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' -]*$/,
    },
    lastName: {
      maxLength: 60,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' -]*$/,
    },
    maternalLastName: {
      maxLength: 60,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' -]*$/,
    },
  };

  const { changeValues } = useValidateField(setInitialData, configs);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeValues(e);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    if (
      !initialData.firstName ||
      !initialData.lastName ||
      !initialData.maternalLastName ||
      !initialData.email
    ) {
      return toast.error("Please fill in all fields");
    }

    if (!validateEmail(initialData.email)) {
      return toast.error("Please enter a valid email address");
    }
    console.log(initialData);
  };

  return (
    <form action="" className="flex flex-col gap-3">
      <UserProfileNames initialData={initialData} handleChange={handleChange} />
      <UserProfileSurnames
        initialData={initialData}
        handleChange={handleChange}
      />
      <UserProfileEmail initialData={initialData} handleChange={handleChange} />
      <UserProfilePhotoUpload />
      <div className="flex justify-end">
        <button
          type="submit"
          className="text-sm text-white bg-black px-3 py-2 rounded-xl"
          onClick={handleClick}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default UserProfileForm;
