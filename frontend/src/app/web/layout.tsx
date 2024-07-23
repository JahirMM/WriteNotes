import NavBarPage from "@/share/components/NavBarPage";
import { ReactNode } from "react";

function layoutPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2 w-full min-h-screen">
      <NavBarPage />
      <div className="ml-28 w-full">{children}</div>
    </div>
  );
}

export default layoutPage;
