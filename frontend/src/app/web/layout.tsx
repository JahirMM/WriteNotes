// COMPONENT
import NavBarPage from "@/share/components/NavBarPage";

import { ReactNode } from "react";
import { Toaster } from "sonner";

function layoutPage({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen overflow-auto">
      <NavBarPage />
      <main className="bg-backgroundSecondary rounded-2xl mt-5 mb-6 mr-6 ml-6 p-4 sm:ml-20">
        {children}
        <Toaster position="top-right" richColors closeButton duration={3000} />
      </main>
    </div>
  );
}

export default layoutPage;
