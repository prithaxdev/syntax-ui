import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BellRing, SearchIcon } from "lucide-react";
import NotificationDropdown from "./notification-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDropdown from "./user-dropdown";

export function SiteHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 h-8 w-8 cursor-pointer" />
        <InputGroup className="h-9 rounded-md">
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex items-center gap-3">
        <NotificationDropdown
          defaultOpen={false}
          align="center"
          trigger={
            <div className="hover:bg-accent relative cursor-pointer rounded-full p-2 before:absolute before:top-1 before:bottom-0 before:left-1/2 before:z-10 before:h-2 before:w-2 before:rounded-full before:bg-red-500">
              <BellRing className="size-4" />
            </div>
          }
        />
        <UserDropdown
          defaultOpen={false}
          align="center"
          trigger={
            <div className="rounded-full">
              <Avatar className="size-8 cursor-pointer">
                <AvatarImage
                  src="https://images.shadcnspace.com/assets/profiles/user-11.jpg"
                  alt="David McMichael"
                />
                <AvatarFallback>DM</AvatarFallback>
              </Avatar>
            </div>
          }
        />
      </div>
    </div>
  );
}
