import { useState, useEffect } from "react";

export function useScratchPad() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const information = localStorage.getItem("scratchPadInformation");
    setData(information === null ? "" : information);
  }, []);

  const addData = (text: string) => {
    localStorage.setItem("scratchPadInformation", text);
    setData(text);
  };

  return { data, addData };
}
