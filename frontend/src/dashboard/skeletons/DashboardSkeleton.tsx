import { useState } from "react";

function DashboardSkeleton() {
  const initialNotes = [];
  for (let index = 0; index < 5; index++) {
    initialNotes.push(
      <div
        key={index}
        className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl p-2 mb-4 flex flex-col justify-between animate-pulse"
      >
        <div className="text-sm space-y-4">
          <p className="bg-backgroundSecondary h-3 w-32 rounded-lg"></p>
          <div className="flex flex-col gap-2">
            <p className="bg-backgroundSecondary h-2 w-40 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-32 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-28 rounded-lg"></p>
            <p className="bg-backgroundSecondary h-2 w-40 rounded-lg"></p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="bg-backgroundSecondary h-2 w-14 rounded-lg"></p>
          <p className="bg-backgroundSecondary h-2 w-10 rounded-lg"></p>
        </div>
      </div>
    );
  }

  const [notes] = useState(initialNotes);

  return <div className="flex gap-3 overflow-auto scrollVisible">{notes}</div>;
}

export default DashboardSkeleton;
