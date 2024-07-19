import Start from "@/icons/Start";

function DashboardNote({ title, description, date, favorite }: any) {
  return (
    <div className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl p-2 flex flex-col justify-between cursor-pointer">
      <div className="text-sm space-y-2">
        <p className="font-semibold">{title}</p>
        <p className="line-clamp-6">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs">{date}</span>
        {favorite && <Start fill="#FFF500" width={12} />}
      </div>
    </div>
  );
}

export default DashboardNote;
