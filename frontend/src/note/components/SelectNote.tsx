function SelectNote() {
  return (
    <section className="bg-backgroundNotes p-2 rounded-xl row-span-5 md:row-span-7 md:col-span-3">
      <div className="h-full p-2 rounded-xl flex flex-col gap-7 items-center justify-center">
        <img src="/notes/selectNote.svg" alt="" className="w-3/4" />
        <span className="font-semibold">select a note</span>
      </div>
    </section>
  );
}

export default SelectNote;
