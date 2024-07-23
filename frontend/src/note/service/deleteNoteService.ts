import { useInitialApi } from "@/share/hooks/useInitialApi";

// INTERFACE
const { initialApi } = useInitialApi();

export const deleteeNote = async (
  noteId: string
): Promise<{ message: string }> => {
  const res = await initialApi.delete(`note/${noteId}`, {
    withCredentials: true,
  });
  return res.data;
};
