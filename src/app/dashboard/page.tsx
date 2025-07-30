"use client"
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import Dashboard from "@/components/pages/dashboard";

export default function Page() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); // Force full page reload
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col p-4 md:p-8 bg-card rounded-lg shadow-sm mt-4">
        <Dashboard />
      </div>
    </SidebarInset>
  );
}