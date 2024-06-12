"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ChevronDown, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-[#0762C8]/90 backdrop-blur-3xl rounded-b-[23px] max-h-max">
      <div className="max-w-7xl mx-auto flex items-center px-[80px] pt-[50px] pb-4  flex-row justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex gap-5 items-center">
          <DesktopNav />
          <Button variant="cta">LET&#39;S TALK</Button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
const NavItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Service",
    subItems: [
      {
        name: "Service 1",
        link: "#",
      },
      {
        name: "Service 2",
        link: "#",
      },
      {
        name: "Service 3",
        link: "#",
      },
    ],
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
];
const DesktopNav = () => {
  return (
    <div className="lg:block hidden">
      <NavigationMenu>
        <NavigationMenuList className="gap-5 text-white font-bold text-base uppercase">
          {NavItems.map((item) =>
            item.subItems ? (
              <NavigationMenuItem key={item.name} className="relative">
                <NavigationMenuTrigger className="text-white font-bold text-base uppercase">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" font-bold text-base uppercase ">
                  <NavigationMenuList className="grid w-max text-left gap-3 p-4  ">
                    {item.subItems.map((subItem) => (
                      <NavigationMenuItem key={subItem.name}>
                        <ListItem
                          href={subItem.link}
                          title={subItem.name}
                        ></ListItem>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem
                key={item.name}
                className="hover:-translate-y-1 transition-transform ease-in-out hover:drop-shadow-xl"
              >
                <NavigationMenuLink href={item.link}>
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          // ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-bold text-base uppercase">{title}</div>
          {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p> */}
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="block lg:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <div className="text-white cursor-pointer">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent>
          <NavigationMenu>
            <NavigationMenuList className="gap-5 text-white font-bold flex-col text-base uppercase text-left items-start ">
              {NavItems.map((item) =>
                item.subItems ? (
                  <NavigationMenuItem key={item.name} className="relative">
                    <div
                      onClick={() => setIsActive(!isActive)}
                      className="text-white font-bold text-base  uppercase flex gap-2"
                    >
                      {item.name}
                      <ChevronDown />
                    </div>
                    {/* <NavigationMenuContent className=" font-bold text-base uppercase "> */}
                    {isActive && (
                      <NavigationMenuList className="grid w-max text-left items-start gap-3 p-4  ">
                        {item.subItems.map((subItem) => (
                          <NavigationMenuItem key={subItem.name}>
                            <ListItem
                              href={subItem.link}
                              title={subItem.name}
                            ></ListItem>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    )}
                    {/* </NavigationMenuContent> */}
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem
                    key={item.name}
                    className="hover:-translate-y-1 transition-transform ease-in-out hover:drop-shadow-xl"
                  >
                    <NavigationMenuLink href={item.link}>
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Navbar;
