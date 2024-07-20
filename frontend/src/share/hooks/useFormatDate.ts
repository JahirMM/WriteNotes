export function useFormatDate(date: string) {
  const parsedDate = new Date(date);

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return { formattedDate };
}
