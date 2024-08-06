import Close from "@/icons/Close";
import { useRouter } from "next/navigation";

function CloseFormButton({
  onlyFavoriteNotes,
}: {
  onlyFavoriteNotes: boolean;
}) {
  const router = useRouter();

  const handleCloseForm = () => {
    const url = onlyFavoriteNotes ? "/web/favoriteNotes" : "/web/notes";
    router.push(url);
  };
  return (
    <span className="flex justify-end mb-3 md:hidden">
      <Close
        fill="#FA7268"
        width={16}
        className="cursor-pointer"
        onClick={handleCloseForm}
      />
    </span>
  );
}

export default CloseFormButton;
