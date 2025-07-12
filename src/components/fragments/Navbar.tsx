import { env } from "@/configs/env";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../actions";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

type RouteProps = {
  href: string;
  label: string;
};

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/schedule",
    label: "Schedule",
  },
];

export const Navbar = () => {
  return (
    <header className="bg-opacity-15 border-secondary bg-card sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border p-2 shadow-inner md:w-[70%] lg:w-[75%] lg:max-w-screen-xl">
      <Link href="/" className="flex items-center gap-2 text-lg font-bold">
        <Image
          src={env.NEXT_PUBLIC_OG_IMAGE_URL}
          alt="logo-kkn"
          width={40}
          height={40}
        />
        KKN-12
      </Link>
      {/* <!-- Mobile --> */}
      <MobileNav />

      {/* <!-- Desktop --> */}
      <DesktopNav />

      <div className="hidden lg:flex">
        <ThemeToggle />
      </div>
    </header>
  );
};

export const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-card border-secondary flex flex-col justify-between rounded-tr-2xl rounded-br-2xl"
        >
          <div>
            <SheetHeader className="mb-4 ml-4">
              <SheetTitle className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={env.NEXT_PUBLIC_OG_IMAGE_URL}
                    alt="logo-kkn"
                    width={40}
                    height={40}
                  />
                  KKN-12
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2">
              {routeList.map(({ href, label }) => (
                <Button
                  key={href}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </div>
          </div>

          <SheetFooter className="flex-col items-start justify-start sm:flex-col">
            <Separator className="mb-2" />

            <ThemeToggle />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const DesktopNav = () => {
  return (
    <NavigationMenu className="mx-auto hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          {routeList.map(({ href, label }) => (
            <NavigationMenuLink key={href} asChild>
              <Link href={href} className="px-2 text-base">
                {label}
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
