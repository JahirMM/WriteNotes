function NoteListSkeleton() {
  const notes = [];
  for (let index = 0; index < 3; index++) {
    notes.push(
      <div
        key={index}
        className="bg-colorNote p-3 rounded-xl flex flex-col justify-between large-note-dimensions sm:large-note-dimensions"
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
    <div className="flex flex-col gap-3 items-center max-h-[95%] overflow-auto">
      {notes}
    </div>
  );
}

export default NoteListSkeleton;
