import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { SiteHeader } from "./site-header";

type Props = { children: ReactNode };

export function AppLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <header className="bg-background sticky top-0 z-50 flex items-center border-b px-6 py-3">
          <SiteHeader />
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
