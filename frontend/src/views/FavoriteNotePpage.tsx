import NoteComponentWrapper from "@/note/components/NoteComponent";

function FavoriteNotePpage() {
  return <NoteComponentWrapper onlyFavoriteNotes={true} />;
}

export default FavoriteNotePpage;
