import { Link, useLocation } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import UserDropdown from "./user-dropdown";

function AppBreadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, i) => ({
    label: seg
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, i) => (
          <BreadcrumbItem key={crumb.href}>
            {i < crumbs.length - 1 ? (
              <>
                <BreadcrumbLink render={<Link to={crumb.href} />}>
                  {crumb.label}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function SiteHeader() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1 h-8 w-8 cursor-pointer" />
        <div>
          <Separator orientation="vertical" className="h-4" />
        </div>
        <AppBreadcrumb />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          className="h-8 w-8 cursor-pointer rounded-full"
          onClick={toggle}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
        <UserDropdown
          defaultOpen={false}
          align="end"
          trigger={
            <Avatar className="size-8 cursor-pointer" size="sm">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Pritha Karki"
              />
              <AvatarFallback>PK</AvatarFallback>
            </Avatar>
          }
        />
      </div>
    </div>
  );
}
