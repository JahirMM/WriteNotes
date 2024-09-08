import { getInitialApi } from "@/share/hooks/useInitialApi";

export const deleteeNote = async (
  noteId: string
): Promise<{ message: string }> => {
  const initialApi = getInitialApi();
  const res = await initialApi.delete(`note/${noteId}`, {
    withCredentials: true,
  });
  return res.data;
};
