import { NotesResponsiveInterfaces } from "../interfaces/NotesResponsiveInterfaces";
import { useInitialApi } from "../hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const fetchNotes = async (
  onlyFavorite: boolean
): Promise<NotesResponsiveInterfaces> => {
  const url = onlyFavorite ? "notes?favorite=true" : "notes";
  const res = await initialApi.get(url, {
    withCredentials: true,
  });
  return res.data;
};
