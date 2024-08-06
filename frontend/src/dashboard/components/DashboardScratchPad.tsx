// HOOK
import { useScratchPad } from "../hooks/useScratchPad";

import { useState, useEffect } from "react";

function DashboardScratchPad() {
  const { data, addData } = useScratchPad();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    addData(newText);
  };

  return (
    <div className="bg-backgroundNotes rounded-xl flex flex-col gap-3 p-3 row-start-2 row-end-3 md:col-start-4 md:col-end-6">
      <p className="text-sm">Scratch Pad</p>
      <textarea
        name="memoPad"
        id="memoPad"
        value={text}
        onChange={handleChange}
        className="bg-colorMemoPad text-sm min-h-64 max-h-64 rounded-2xl p-2 focus:outline-none focus:ring-0"
      ></textarea>
    </div>
  );
}

export default DashboardScratchPad;
