function NoteForm() {
  return (
    <section className="bg-backgroundNotes p-2 rounded-xl row-span-5 md:row-span-7 md:col-span-3">
      <div className="h-full p-2 rounded-xl">
        <form action="" className="flex flex-col gap-5 h-full">
          <input
            type="text"
            placeholder="Title"
            className="font-semibold text-lg p-2 bg-transparent transparent shadow-sm rounded-lg focus:outline-none focus:ring-0"
          />
          <textarea
            name="description"
            id="description"
            placeholder="Start writing"
            className="text-sm flex-1 p-2 w-full bg-transparent shadow-md focus:outline-none focus:ring-0"
          ></textarea>
          <button className="bg-black py-2 px-3 rounded-xl text-sm text-white">
            Agregar cambios
          </button>
        </form>
      </div>
    </section>
  );
}

export default NoteForm;
