import { useEffect, useState } from "react";

export function useChangeTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      const preferredTheme =
        savedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      setTheme(preferredTheme);
      document.documentElement.classList.toggle(
        "dark",
        preferredTheme === "dark"
      );
      localStorage.setItem("theme", preferredTheme);
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { handleChangeTheme, theme };
}
