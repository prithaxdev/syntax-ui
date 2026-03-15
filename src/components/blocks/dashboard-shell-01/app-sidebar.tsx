import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { navFooter, navMain, navUtils } from "@/config/nav";
import { NavMain } from "./nav-main";

function NavBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400/15 px-1 text-[10px] font-semibold text-amber-400 tabular-nums group-data-[collapsible=icon]:hidden">
      {children}
    </span>
  );
}

export function AppSidebar() {
  const { pathname } = useLocation();
  const { isMobile, setOpenMobile } = useSidebar();

  // Close the mobile sheet on every navigation
  useEffect(() => {
    if (isMobile) setOpenMobile(false);
  }, [pathname, isMobile, setOpenMobile]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Sidebar collapsible="icon" className="lg:border-r-0!">
      {/* Header — logo mark + wordmark */}
      <SidebarHeader className="border-b px-2 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Syntax"
              className="hover:bg-sidebar-accent/50 h-10 gap-2.5"
              render={<Link to="/dashboard" />}
            >
              <div className="flex w-full items-center gap-2 group-data-[collapsible=icon]:justify-center">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-400">
                  <span className="text-sm font-black text-black">S</span>
                </div>
                <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
                  <span className="text-sidebar-foreground truncate text-sm leading-tight font-bold">
                    Syntax
                  </span>
                  <span className="text-muted-foreground truncate text-[10px] leading-tight">
                    Personal workspace
                  </span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main navigation */}
      <SidebarContent className="px-2">
        <NavMain items={navMain} />

        {navUtils.length > 0 && (
          <>
            <SidebarSeparator />
            <SidebarMenu>
              {navUtils.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isActive(item.href)}
                      className="h-9"
                      render={<Link to={item.href} />}
                    >
                      <Icon className={cn("size-4 shrink-0", item.iconColor)} />
                      <span className="flex-1 text-sm">{item.title}</span>
                      {item.badge && <NavBadge>{item.badge}</NavBadge>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </>
        )}
      </SidebarContent>

      {/* Footer navigation */}
      <SidebarFooter className="gap-0 px-2 pb-3">
        <SidebarSeparator className="mb-2" />
        <SidebarMenu>
          {navFooter.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isActive(item.href)}
                  className="h-9"
                  render={<Link to={item.href} />}
                >
                  <Icon className={cn("size-4 shrink-0", item.iconColor)} />
                  <span className="flex-1 text-sm">{item.title}</span>
                  {item.badge && <NavBadge>{item.badge}</NavBadge>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
