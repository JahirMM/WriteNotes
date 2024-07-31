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
    <header className="flex gap-5 flex-col-reverse justify-center sm:flex-row md:mt-0 md:mb-0">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
        className="font-semibold text-lg p-2 bg-transparent shadow-md rounded-lg focus:outline-none focus:ring-0 flex-1"
      />
      <span className="flex justify-end">
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
      </span>
    </header>
  );
};

export default NotesFormHeader;
