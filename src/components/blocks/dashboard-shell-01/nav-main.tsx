import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { NavItem, NavLinkItem } from "@/config/nav";

type Props = { items: NavItem[] };

export function NavMain({ items }: Props) {
  const { pathname } = useLocation();
  const { state, setOpen } = useSidebar();

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname === href || pathname.startsWith(href + "/");

  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const open = new Set<string>();
    for (const item of items) {
      if (!item.isSection && item.items && pathname.startsWith(item.href)) {
        open.add(item.title);
      }
    }
    return open;
  });

  // Keep open sections in sync when navigating
  useEffect(() => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      for (const item of items) {
        if (!item.isSection && item.items && pathname.startsWith(item.href)) {
          next.add(item.title);
        }
      }
      return next;
    });
  }, [pathname, items]);

  const toggle = (title: string) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });

  return (
    <SidebarGroup className="p-0 pt-1">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => {
            if (item.isSection) {
              return (
                <SidebarGroup
                  key={item.label}
                  className={cn("p-0", index > 0 && "pt-5")}
                >
                  <SidebarGroupLabel className="text-sidebar-foreground p-0 text-xs font-medium uppercase group-data-[collapsible=icon]:hidden">
                    {item.label}
                  </SidebarGroupLabel>
                </SidebarGroup>
              );
            }

            const navItem = item as NavLinkItem;
            const hasItems = !!navItem.items?.length;
            const isOpen = openSections.has(navItem.title);
            const active = isActive(navItem.href);
            const Icon = navItem.icon;

            return (
              <SidebarMenuItem key={navItem.title}>
                <SidebarMenuButton
                  tooltip={navItem.title}
                  isActive={active}
                  className="h-9"
                  render={!hasItems ? <Link to={navItem.href} /> : undefined}
                  onClick={
                    hasItems
                      ? () => {
                          if (state === "collapsed") {
                            // Always open the section when expanding from collapsed state —
                            // toggling would close a section the user intends to navigate into.
                            setOpen(true);
                            setOpenSections(
                              (prev) => new Set([...prev, navItem.title]),
                            );
                          } else {
                            toggle(navItem.title);
                          }
                        }
                      : undefined
                  }
                >
                  <Icon className={cn("size-4 shrink-0", navItem.iconColor)} />
                  <span className="flex-1 text-sm">{navItem.title}</span>
                  {hasItems && (
                    <ChevronDown
                      className={cn(
                        "text-muted-foreground size-3.5 transition-transform duration-200 group-data-[collapsible=icon]:hidden",
                        isOpen ? "rotate-0" : "-rotate-90",
                      )}
                    />
                  )}
                </SidebarMenuButton>

                {hasItems && isOpen && (
                  <SidebarMenuSub>
                    {navItem.items!.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton
                            render={<Link to={sub.href} />}
                            isActive={pathname === sub.href}
                          >
                            {SubIcon && (
                              <SubIcon className="text-muted-foreground size-3.5 shrink-0" />
                            )}
                            <span>{sub.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
