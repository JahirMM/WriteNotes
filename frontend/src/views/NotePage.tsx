import NoteComponentWrapper from "@/note/components/NoteComponent";

function NotePage() {
  return <NoteComponentWrapper onlyFavoriteNotes={false} />;
}

export default NotePage;
