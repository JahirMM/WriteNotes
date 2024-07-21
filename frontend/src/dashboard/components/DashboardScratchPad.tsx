"use client";

import { useState, useEffect } from "react";
import { useScratchPad } from "../hooks/useScratchPad";

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
    <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col justify-around md:col-span-2">
      <div>
        <p className="text-sm">Scratch Pad</p>
      </div>
      <textarea
        name="memoPad"
        id="memoPad"
        value={text}
        className="bg-colorMemoPad min-h-64 max-h-64 w-full rounded-2xl p-2 focus:outline-none focus:ring-0"
        onChange={handleChange}
      ></textarea>
    </section>
  );
}

export default DashboardScratchPad;
