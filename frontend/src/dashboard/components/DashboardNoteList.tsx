// COMPONETS
import DashboardNote from "./DashboardNote";

// ICON
import Note from "@/icons/Note";

import Link from "next/link";

interface DashboardNoteListProps {
  onlyFavoriteNotes: boolean;
}

function DashboardNoteList({ onlyFavoriteNotes }: DashboardNoteListProps) {
  const notes = [
    {
      title: "Lorem ipum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      favorite: true,
      date: "12/10/2024",
    },
    {
      title: "Note 1",
      description: "Description for Note 1. This is a sample note description.",
      favorite: false,
      date: "01/01/2023",
    },
    {
      title: "Note 2",
      description:
        "Description for Note 2. This note contains important information.",
      favorite: true,
      date: "05/03/2023",
    },
    {
      title: "Note 3",
      description:
        "Description for Note 3. Remember to review this note carefully.",
      favorite: false,
      date: "11/11/2022",
    },
    {
      title: "Note 4",
      description:
        "Description for Note 4. Contains details about the project.",
      favorite: true,
      date: "23/07/2023",
    },
    {
      title: "Note 5",
      description:
        "Description for Note 5. Follow up on the tasks mentioned here.",
      favorite: true,
      date: "10/08/2023",
    },
    {
      title: "Note 6",
      description:
        "Description for Note 6. Important note regarding the meeting.",
      favorite: false,
      date: "18/09/2023",
    },
    {
      title: "Note 7",
      description:
        "Description for Note 7. Plan the next steps based on this note.",
      favorite: true,
      date: "25/10/2023",
    },
    {
      title: "Note 8",
      description:
        "Description for Note 8. Contains reminders for upcoming events.",
      favorite: false,
      date: "15/11/2023",
    },
    {
      title: "Note 9",
      description:
        "Description for Note 9. Make sure to address the issues listed.",
      favorite: true,
      date: "02/12/2023",
    },
    {
      title: "Note 10",
      description:
        "Description for Note 10. Useful information for the new project.",
      favorite: true,
      date: "20/01/2024",
    },
    {
      title: "Note 11",
      description: "Description for Note 11. Contains feedback from the team.",
      favorite: false,
      date: "04/02/2024",
    },
    {
      title: "Note 12",
      description:
        "Description for Note 12. Steps to complete the pending tasks.",
      favorite: true,
      date: "22/02/2024",
    },
    {
      title: "Note 13",
      description:
        "Description for Note 13. Follow the guidelines mentioned here.",
      favorite: false,
      date: "12/03/2024",
    },
    {
      title: "Note 14",
      description:
        "Description for Note 14. Ensure the quality of the deliverables.",
      favorite: true,
      date: "29/03/2024",
    },
    {
      title: "Note 15",
      description:
        "Description for Note 15. Important deadlines and milestones.",
      favorite: true,
      date: "18/04/2024",
    },
    {
      title: "Note 16",
      description: "Description for Note 16. Summary of the recent discussion.",
      favorite: false,
      date: "05/05/2024",
    },
  ];

  const filteredNotes = onlyFavoriteNotes
    ? notes.filter((note) => note.favorite === true)
    : notes;

  return (
    <div className="flex gap-3 overflow-auto">
      {filteredNotes.map((note, index) => (
        <DashboardNote
          key={index}
          title={note.title}
          description={note.description}
          date={note.date}
          favorite={note.favorite}
        />
      ))}
      <Link
        href={"/web/notes"}
        className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl cursor-pointer flex flex-col gap-3 justify-center items-center"
      >
        <div className="bg-backgroundIcon h-28 w-28 rounded-full flex justify-center items-center">
          <Note fill="#000" width={68} />
        </div>
        <span className="font-semibold">Notes ({filteredNotes.length})</span>
      </Link>
    </div>
  );
}

export default DashboardNoteList;
