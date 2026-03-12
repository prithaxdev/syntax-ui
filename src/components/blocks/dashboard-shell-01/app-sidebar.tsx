import Logo from "@/assets/logo/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  AlignStartVertical,
  BarChart3,
  ChartPie,
  CircleUserRound,
  ClipboardList,
  CreditCard,
  Languages,
  LayoutPanelTop,
  Notebook,
  NotepadText,
  Table,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { NavMain } from "./nav-main";
import { SiteHeader } from "./site-header";

export type NavItem = {
  label?: string;
  isSection?: boolean;
  title?: string;
  icon?: LucideIcon;
  href?: string;
  children?: NavItem[];
  isActive?: boolean;
};

export const navData: NavItem[] = [
  // Dashboards Section
  { label: "Dashboards", isSection: true },
  { title: "Analytics", icon: BarChart3, href: "#", isActive: true },
  { title: "CRM Dashboard", icon: ClipboardList, href: "#" },

  // Pages Section
  { label: "Pages", isSection: true },
  { title: "Tables", icon: Table, href: "#" },
  { title: "Forms", icon: ClipboardList, href: "#" },
  { title: "User Profile", icon: CircleUserRound, href: "#" },

  // Apps Section
  { label: "Apps", isSection: true },
  { title: "Notes", icon: Notebook, href: "#" },
  { title: "Tickets", icon: Ticket, href: "#" },
  {
    title: "Blogs",
    icon: Languages,
    children: [
      { title: "Blog Post", href: "#" },
      { title: "Blog Detail", href: "#" },
      { title: "Blog Edit", href: "#" },
      { title: "Blog Create", href: "#" },
      { title: "Manage Blogs", href: "#" },
    ],
  },

  // Form Elements Section
  { label: "Form Elements", isSection: true },
  {
    title: "Shadcn Forms",
    icon: NotepadText,
    children: [
      { title: "Button", href: "#" },
      { title: "Input", href: "#" },
      { title: "Select", href: "#" },
      { title: "Checkbox", href: "#" },
      { title: "Radio", href: "#" },
    ],
  },
  {
    title: "Form layouts",
    icon: AlignStartVertical,
    children: [
      { title: "Forms Horizontal", href: "#" },
      { title: "Forms Vertical", href: "#" },
      { title: "Forms Validation", href: "#" },
      { title: "Forms Examples", href: "#" },
      { title: "Forms Wizard", href: "#" },
    ],
  },
  { label: "WIDGETS", isSection: true },
  {
    title: "Cards",
    icon: CreditCard,
    children: [
      { title: "Ecommerce Actions", href: "#" },
      { title: "Course ", href: "#" },
      { title: "Campaign Performance ", href: "#" },
      { title: "Selling Products ", href: "#" },
      { title: "Activity Timeline ", href: "#" },
    ],
  },
  {
    title: "Banners",
    icon: LayoutPanelTop,
    children: [{ title: "Analytic Banner ", href: "#" }],
  },
  {
    title: "Charts",
    icon: ChartPie,
    children: [
      { title: "Sales Report", href: "#" },
      { title: "Weekly Sales", href: "#" },
    ],
  },
];

const AppSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar className="bg-background px-0 py-4">
        <div className="bg-background flex flex-col gap-6">
          {/*Header*/}
          <SidebarHeader className="px-4 py-0">
            <SidebarMenu>
              <SidebarMenuItem>
                <a href="#" className="h-full w-full">
                  <Logo />
                </a>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          {/*Content*/}
          <SidebarContent className="gap-0 overflow-hidden px-0">
            <SimpleBar
              autoHide={true}
              className="border-border h-[calc(100vh)] border-b"
            >
              <div className="px-4">
                <NavMain items={navData} />
              </div>
            </SimpleBar>
          </SidebarContent>
        </div>
      </Sidebar>
      {/*Main*/}
      <div className="flex flex-1 flex-col">
        <header className="bg-background sticky top-0 z-50 flex items-center border-b px-6 py-3">
          <SiteHeader />
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
