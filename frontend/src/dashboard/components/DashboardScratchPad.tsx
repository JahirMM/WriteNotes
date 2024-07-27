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
    <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col gap-3 justify-evenly md:col-start-4 md:col-end-6">
      <p>Scratch Pad</p>
      <textarea
        name="memoPad"
        id="memoPad"
        value={text}
        onChange={handleChange}
        className="bg-colorMemoPad min-h-64 max-h-64 rounded-2xl p-2 focus:outline-none focus:ring-0"
      ></textarea>
    </section>
  );
}

export default DashboardScratchPad;
