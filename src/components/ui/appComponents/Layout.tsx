import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex justify-center !bg-background w-full">
        <AppSidebar />
        <div className="2xl:container w-full !bg-background *:!bg-background">
          <Outlet>

          
          </Outlet>
        </div>
      </div>
    </SidebarProvider>
  );
}
