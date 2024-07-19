function DashboardMemoPad() {
  return (
    <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col justify-around md:col-span-2">
      <div>
        <p className="text-sm">Memo pad</p>
      </div>
      <textarea
        name="memoPad"
        id="memoPad"
        className="bg-colorMemoPad min-h-64 max-h-64 w-full rounded-2xl p-2 focus:outline-none focus:ring-0"
      ></textarea>
    </section>
  );
}

export default DashboardMemoPad;
