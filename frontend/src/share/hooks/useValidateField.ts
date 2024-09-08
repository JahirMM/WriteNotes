// INTERFACE
import { UserProfileInterface } from "@/user/interfaces/UserProfileInterface";
import { FieldRulesInterface } from "../interfaces/FieldRulesInterface";

import { ChangeEvent } from "react";

interface FieldRulesList {
  [key: string]: FieldRulesInterface;
}

export function useValidateField(
  setInitialData: React.Dispatch<React.SetStateAction<UserProfileInterface>>,
  rulesList: FieldRulesList
) {
  const changeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const rules = rulesList[id];

    if (!rules) {
      setInitialData((prevData) => ({ ...prevData, [id]: value }));
      return;
    }

    const { maxLength, pattern } = rules;

    if (
      (maxLength && value.length > maxLength) ||
      (pattern && !pattern.test(value))
    ) {
      return;
    }

    setInitialData((prevData) => ({ ...prevData, [id]: value }));
  };

  return { changeValues };
}
