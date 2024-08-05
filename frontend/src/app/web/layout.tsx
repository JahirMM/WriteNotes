import NavBarPage from "@/share/components/NavBarPage";
import { ReactNode } from "react";

function layoutPage({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen overflow-auto">
      <NavBarPage />
      <main className="sm:ml-20">{children}</main>
    </div>
  );
}

export default layoutPage;
