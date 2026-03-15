import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  ClipboardList,
  Table,
  CircleUserRound,
  Notebook,
  Ticket,
  Languages,
  NotepadText,
  AlignStartVertical,
  CreditCard,
  LayoutPanelTop,
  ChartPie,
  Bell,
  HelpCircle,
  Settings,
} from "lucide-react";

export type SubItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

export type NavLinkItem = {
  isSection?: false;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  href: string;
  badge?: string;
  items?: SubItem[];
};

export type NavSectionItem = {
  isSection: true;
  label: string;
};

export type NavItem = NavLinkItem | NavSectionItem;

// ── Main nav ──
export const navMain: NavItem[] = [
  // ─ Dashboards ─
  { isSection: true, label: "Dashboards" },
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/dashboard",
    iconColor: "text-primary",
  },
  {
    title: "Analytics",
    icon: ClipboardList,
    href: "/dashboard/analytics",
    iconColor: "text-rose-400",
  },

  // ─ Pages ─
  { isSection: true, label: "Pages" },
  {
    title: "Tables",
    icon: Table,
    href: "/dashboard/tables",
    iconColor: "text-sky-400",
  },
  {
    title: "Forms",
    icon: ClipboardList,
    href: "/dashboard/forms",
    iconColor: "text-emerald-400",
  },
  {
    title: "User Profile",
    icon: CircleUserRound,
    href: "/dashboard/profile",
    iconColor: "text-violet-400",
  },

  // ─ Apps ─
  { isSection: true, label: "Apps" },
  {
    title: "Notes",
    icon: Notebook,
    href: "/dashboard/notes",
    iconColor: "text-amber-400",
  },
  {
    title: "Tickets",
    icon: Ticket,
    href: "/dashboard/tickets",
    iconColor: "text-cyan-400",
  },
  {
    title: "Blogs",
    icon: Languages,
    href: "/dashboard/blogs",
    iconColor: "text-orange-400",
    items: [
      { title: "Blog Post", href: "/dashboard/blogs/post" },
      { title: "Blog Detail", href: "/dashboard/blogs/detail" },
      { title: "Blog Edit", href: "/dashboard/blogs/edit" },
      { title: "Blog Create", href: "/dashboard/blogs/create" },
      { title: "Manage Blogs", href: "/dashboard/blogs/manage" },
    ],
  },

  // ─ Form Elements ─
  { isSection: true, label: "Form Elements" },
  {
    title: "Shadcn Forms",
    icon: NotepadText,
    href: "/dashboard/shadcn-forms",
    iconColor: "text-emerald-400",
    items: [
      { title: "Button", href: "/dashboard/shadcn-forms/button" },
      { title: "Input", href: "/dashboard/shadcn-forms/input" },
      { title: "Select", href: "/dashboard/shadcn-forms/select" },
      { title: "Checkbox", href: "/dashboard/shadcn-forms/checkbox" },
      { title: "Radio", href: "/dashboard/shadcn-forms/radio" },
    ],
  },
  {
    title: "Form Layouts",
    icon: AlignStartVertical,
    href: "/dashboard/form-layouts",
    iconColor: "text-violet-400",
    items: [
      { title: "Horizontal", href: "/dashboard/form-layouts/horizontal" },
      { title: "Vertical", href: "/dashboard/form-layouts/vertical" },
      { title: "Validation", href: "/dashboard/form-layouts/validation" },
      { title: "Examples", href: "/dashboard/form-layouts/examples" },
      { title: "Wizard", href: "/dashboard/form-layouts/wizard" },
    ],
  },

  // ─ Widgets ─
  { isSection: true, label: "Widgets" },
  {
    title: "Cards",
    icon: CreditCard,
    href: "/dashboard/cards",
    iconColor: "text-amber-400",
    items: [
      { title: "Ecommerce Actions", href: "/dashboard/cards/ecommerce" },
      { title: "Course", href: "/dashboard/cards/course" },
      { title: "Campaign Performance", href: "/dashboard/cards/campaign" },
      { title: "Selling Products", href: "/dashboard/cards/products" },
      { title: "Activity Timeline", href: "/dashboard/cards/timeline" },
    ],
  },
  {
    title: "Banners",
    icon: LayoutPanelTop,
    href: "/dashboard/banners",
    iconColor: "text-sky-400",
    items: [{ title: "Analytic Banner", href: "/dashboard/banners/analytic" }],
  },
  {
    title: "Charts",
    icon: ChartPie,
    href: "/dashboard/charts",
    iconColor: "text-rose-400",
    items: [
      { title: "Sales Report", href: "/dashboard/charts/sales" },
      { title: "Weekly Sales", href: "/dashboard/charts/weekly" },
    ],
  },
];

// ── Utility nav (after separator) ──
export const navUtils: NavLinkItem[] = [];

// ── Footer nav ──
export const navFooter: NavLinkItem[] = [
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
    iconColor: "text-amber-400",
  },
  {
    title: "Help & Docs",
    icon: HelpCircle,
    href: "/help",
    iconColor: "text-muted-foreground",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    iconColor: "text-muted-foreground",
  },
];
