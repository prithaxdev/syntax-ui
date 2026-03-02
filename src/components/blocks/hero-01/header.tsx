import { useState, useEffect, useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const CollaborateButton = ({ className }: { className?: string }) => (
  <Button
    className={cn(
      "group relative h-10 w-fit overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-4",
      className,
    )}
  >
    <span className="relative z-10 transition-all duration-500">
      Let's Collaborate
    </span>
    <span className="bg-background text-foreground absolute right-1 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16} />
    </span>
  </Button>
);

const Header = ({ navigationData, className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={cn(
        "sticky inset-x-0 top-0 z-50 flex h-20 items-center justify-center px-4",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-fit w-full max-w-6xl items-center justify-between gap-3.5 transition-all duration-500 lg:gap-6",
          sticky
            ? "bg-background/60 border-border/40 shadow-primary/5 rounded-full border p-2.5 shadow-2xl backdrop-blur-lg"
            : "border-transparent bg-transparent",
        )}
      >
        {/* Logo */}
        <div>
          <a href="#">
            <Logo className="gap-3" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="bg-muted rounded-full p-0.5 max-lg:hidden">
            <NavigationMenuList className="flex gap-0">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "text-muted-foreground hover:text-foreground hover:bg-background hover:outline-border rounded-full px-2 py-2 text-sm font-medium tracking-normal outline outline-transparent transition hover:shadow-xs lg:px-4",
                      navItem.isActive ? "bg-background text-foreground" : "",
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="flex gap-4">
          <CollaborateButton className="hidden lg:flex" />

          <div className="lg:hidden">
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger id="mobile-menu-trigger">
                  <span className="border-border block rounded-full border p-2">
                    <Icon
                      icon="solar:hamburger-menu-linear"
                      width={20}
                      height={20}
                    />
                    <span className="sr-only">Menu</span>
                  </span>
                </SheetTrigger>

                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full border-l-0 p-0 sm:w-96"
                >
                  <div className="flex items-center justify-between p-6">
                    <a href="#">
                      <Logo className="gap-2" />
                    </a>
                    <SheetClose id="mobile-menu-close">
                      <span className="border-border block rounded-full border p-2.5">
                        <Icon icon="lucide:x" width={16} height={16} />
                      </span>
                    </SheetClose>
                  </div>

                  <div className="flex flex-col gap-12 overflow-y-auto px-6 pb-6">
                    <div className="flex flex-col gap-8">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <NavigationMenu
                        orientation="vertical"
                        className="flex-none items-start"
                      >
                        <NavigationMenuList className="flex flex-col items-start gap-3">
                          {navigationData.map((item) => (
                            <NavigationMenuItem key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                  "group/nav flex items-center p-0 text-2xl font-semibold tracking-tight transition-all hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                  item.isActive
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:translate-x-2",
                                )}
                              >
                                <div
                                  className={cn(
                                    "bg-primary h-0.5 overflow-hidden transition-all duration-300",
                                    item.isActive
                                      ? "mr-2 w-4 opacity-100"
                                      : "w-0 opacity-0 group-hover/nav:mr-2 group-hover/nav:w-4 group-hover/nav:opacity-100",
                                  )}
                                />
                                {item.title}
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
                      </NavigationMenu>

                      <div className="w-fit">
                        <CollaborateButton />
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                      <div className="flex gap-3">
                        {[
                          "lucide:dribbble",
                          "lucide:instagram",
                          "lucide:twitter",
                          "lucide:linkedin",
                        ].map((icon) => (
                          <a
                            key={icon}
                            href="#"
                            className="outline-border hover:bg-muted flex items-center justify-center rounded-full p-3 shadow-xs outline transition"
                          >
                            <Icon icon={icon} width={16} height={16} />
                          </a>
                        ))}
                      </div>

                      <p className="text-muted-foreground text-sm">
                        © 2026 Shadcn Space
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <span className="border-border block rounded-full border p-2 opacity-0">
                <Icon
                  icon="solar:hamburger-menu-linear"
                  width={20}
                  height={20}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
