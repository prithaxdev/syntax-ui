import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Headset,
  type LucideIcon,
  Salad,
  ScanText,
  Star,
  Video,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  trigger: ReactNode;
  defaultOpen?: boolean;
  align?: "start" | "center" | "end";
};

type MenuItem = {
  textColor: string;
  bgColor: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  time: string;
};

const PROFILE_ITEMS: MenuItem[] = [
  {
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    icon: Star,
    title: "Event Today",
    desc: "Just reminder that you have to",
    time: "9:00 AM",
  },
  {
    textColor: "text-orange-400",
    bgColor: "bg-orange-400/10",
    icon: Video,
    title: "Team Meeting",
    desc: "Discuss project updates and next steps",
    time: "10:00 AM",
  },
  {
    textColor: "text-teal-400",
    bgColor: "bg-teal-400/10",
    icon: Salad,
    title: "Lunch Break",
    desc: "Take a break and recharge",
    time: "12:30 PM",
  },
  {
    textColor: "text-red-500",
    bgColor: "bg-red-500/10",
    icon: Headset,
    title: "Client Call",
    desc: "Monthly check-in with the client",
    time: "3:00 PM",
  },
  {
    textColor: "text-sky-400",
    bgColor: "bg-sky-400/10",
    icon: ScanText,
    title: "Project Review",
    desc: "Review project deliverables with client",
    time: "4:00 PM",
  },
];

const NotificationDropdown = ({
  trigger,
  defaultOpen,
  align = "end",
}: Props) => {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu defaultOpen={defaultOpen}>
        <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>

        <DropdownMenuContent
          align={align}
          className="data-open:slide-in-from-top-20! data-closed:slide-out-to-top-20 data-open:fade-in-0 data-closed:fade-out-0 data-closed:zoom-out-100 w-sm rounded-2xl p-0 duration-400"
        >
          {/* title */}
          <DropdownMenuGroup>
            <DropdownMenuLabel className="flex items-center justify-between p-4">
              <p className="text-popover-foreground text-base font-medium">
                Notifications
              </p>
              <Badge className="leading-0 font-normal">5 New</Badge>
            </DropdownMenuLabel>
          </DropdownMenuGroup>

          {/* Notifications */}
          <DropdownMenuGroup>
            {PROFILE_ITEMS.map(
              ({ bgColor, textColor, icon: Icon, title, desc, time }) => (
                <DropdownMenuItem
                  key={title}
                  className={
                    "mx-1.5 my-1 flex cursor-pointer items-center justify-between p-2"
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("rounded-xl p-2.5", bgColor, textColor)}>
                      <Icon size={20} className="size-5" />
                    </div>
                    <div>
                      <p className="text-popover-foreground text-sm font-medium">
                        {title}
                      </p>
                      <p className="text-muted-foreground max-w-52 truncate text-sm">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs">{time}</p>
                </DropdownMenuItem>
              ),
            )}
          </DropdownMenuGroup>

          {/* button */}
          <div className="mx-1.5 my-1 p-2">
            <Button className="hover:bg-primary/80 h-9 w-full cursor-pointer rounded-xl">
              See All Notifications
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationDropdown;
