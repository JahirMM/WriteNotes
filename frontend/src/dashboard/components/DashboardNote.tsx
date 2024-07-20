import Start from "@/icons/Start";
import StartNoBackground from "@/icons/StartNoBackground";
import { useFormatDate } from "@/share/hooks/useFormatDate";

function DashboardNote({ title, description, date, favorite }: any) {
  const { formattedDate } = useFormatDate(date);

  return (
    <div className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl p-2 mb-4 flex flex-col justify-between cursor-pointer">
      <div className="text-sm space-y-2">
        <p className="font-semibold">{title}</p>
        <p className="line-clamp-6">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs">{formattedDate}</span>
        {favorite ? (
          <Start fill="#e4de1f" width={18} />
        ) : (
          <StartNoBackground fill="#000" width={18} />
        )}
      </div>
    </div>
  );
}

export default DashboardNote;
