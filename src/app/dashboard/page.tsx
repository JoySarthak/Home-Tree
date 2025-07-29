import { SiteHeader } from "@/components/site-header"
import { SidebarInset } from "@/components/ui/sidebar"
import Dashboard from "@/components/pages/dashboard"

export default function Page() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col p-4 md:p-8 bg-card rounded-lg shadow-sm mt-4">
        <Dashboard />
      </div>
    </SidebarInset>
  )
}
