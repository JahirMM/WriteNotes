import { useState } from "react";

export function useScratchPad() {
  const [data, setData] = useState(() => {
    const information = localStorage.getItem("scratchPadInformation");
    return information || "";
  });

  const addData = (text: string) => {
    localStorage.setItem("scratchPadInformation", text);
    setData(text);
  };

  return { data, addData };
}
