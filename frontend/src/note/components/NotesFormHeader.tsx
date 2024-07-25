// ICONS
import StartNoBackground from "@/icons/StartNoBackground";
import Start from "@/icons/Start";

interface NotesFormHeaderProps {
  title: string;
  favorite: boolean;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFavoriteClick: () => void;
}

const NotesFormHeader: React.FC<NotesFormHeaderProps> = ({
  title,
  favorite,
  onTitleChange,
  onFavoriteClick,
}) => {
  return (
    <div className="flex gap-3 flex-col-reverse justify-center sm:flex-row">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
        className="font-semibold text-lg p-2 bg-transparent shadow-sm rounded-lg focus:outline-none focus:ring-0 flex-1"
      />
      {favorite ? (
        <Start
          fill="#e4de1f"
          width={18}
          onClick={onFavoriteClick}
          className="hover:animate-spin"
        />
      ) : (
        <StartNoBackground
          fill="#000"
          width={18}
          onClick={onFavoriteClick}
          className="hover:animate-spin"
        />
      )}
    </div>
  );
};

export default NotesFormHeader;
