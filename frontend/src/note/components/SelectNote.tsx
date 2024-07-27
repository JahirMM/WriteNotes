function SelectNote({ showForm }: { showForm: boolean }) {
  return (
    <section
      className={`bg-backgroundNotes rounded-xl p-2 row-start-2 row-end-6 ${
        showForm ? "block" : "hidden"
      } md:block md:col-start-3 md:col-end-6`}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <img src="/notes/selectNote.svg" alt="" className="w-0 md:w-1/2" />
        <span className="font-semibold">select a note</span>
      </div>
    </section>
  );
}

export default SelectNote;
