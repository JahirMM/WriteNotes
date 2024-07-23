import React from "react";

function NoteListSkeleton() {
  const notes = [];
  for (let index = 0; index < 3; index++) {
    notes.push(
      <div
        key={index}
        className="bg-colorNote small-note-dimensions p-3 rounded-xl flex flex-col justify-between md:large-note-dimensions"
      >
        <header>
          <div className="flex justify-between mb-3">
            <p className="bg-backgroundSecondary h-2 w-14 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-10 rounded-lg"></p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-backgroundSecondary h-2 w-40 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-32 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-28 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-40 rounded-lg"></p>
          </div>
        </header>
        <div className="flex justify-between">
          <p className="bg-backgroundSecondary h-2 w-14 rounded-lg"></p>
          <p className="bg-backgroundSecondary h-2 w-10 rounded-lg"></p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-3 overflow-auto md:flex-col md:items-center">
      {notes}
    </div>
  );
}

export default NoteListSkeleton;
