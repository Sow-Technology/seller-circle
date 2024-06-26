"use client";
import React, { useEffect, useState } from "react";
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
import { FaLocationDot, FaMailchimp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

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
import {
  FaFacebook,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaPhoneVolume,
} from "react-icons/fa";
import Link from "next/link";
import { useWindowScroll } from "@uidotdev/usehooks";

const Navbar = () => {
  const [isSecNav, setIsSecNav] = useState(false);
  const [{ y }] = useWindowScroll();
  useEffect(() => {
    if (y > 200) {
      setIsSecNav(true);
    } else {
      setIsSecNav(false);
    }
  }, [y]);
  return (
    <>
      <div className="w-full top-0 bg-[#0762C8]/90 backdrop-blur-3xl rounded-b-[23px] max-h-max relative z-[500]">
        <div className="lg:flex hidden max-w-7xl pt-5  mx-auto px-20  items-center justify-between text-sm ">
          <div className="text-white flex gap-5 items-center justify-center">
            {/* <div className="text-sm">About Us</div>
            <div className="text-lg">
              <FaFacebook />
            </div> */}
          </div>
          <div className="flex gap-5 text-sm items-center">
            <Link href="tel:+9108041688315">
              <div className="flex text-white items-center gap-2">
                <FaPhoneAlt className="text-lg" />
                +9108041688315
              </div>
            </Link>
            {/* <div className="flex text-white items-center gap-2">
              <FaLocationDot className="text-lg" />
              Kalyan Nagar, Bangalore
            </div> */}
            <Link href="mailto:contact@sellercircle.in">
              {" "}
              <div className="flex text-white items-center gap-2">
                <IoMail className="text-lg" />
                contact@sellercircle.in
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex items-center px-5 md:px-[80px] pt-[20px] pb-4  flex-row justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex gap-5 items-center">
            <DesktopNav />
            <Link href="/contact">
              {" "}
              <Button variant="cta">LET&#39;S TALK</Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
      {isSecNav && (
        <div className="w-full fixed slide-in-from-top-4 transition-all ease-in-out top-0 bg-white z-40 backdrop-blur-3xl  max-h-max text-black">
          <div className="max-w-7xl mx-auto flex items-center px-5 md:px-[80px] pt-[20px] pb-4  flex-row justify-between">
            <div>
              <Logo light={false} />
            </div>
            <div className="flex gap-5 items-center">
              <SecDesktopNav />
              <Link href="/contact">
                {" "}
                <Button variant="cta">LET&#39;S TALK</Button>
              </Link>{" "}
              <MobileNav className="invert" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const NavItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Company",
    link: "/company",
  },
  {
    name: "Service",
    subItems: [
      {
        name: "Cataloging",
        link: "#",
      },
      {
        name: "Advertising Management",
        link: "#",
      },
      {
        name: "Account Management",
        link: "#",
      },
      {
        name: "EBC",
        link: "#",
      },
      {
        name: "Brand Store Creation",
        link: "#",
      },
      {
        name: "Seller Reinstatement Services",
        link: "#",
      },
    ],
  },
  {
    name: "Resources",
    link: "/resources",
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
                <NavigationMenuTrigger className="text-white bg-transparent font-bold text-base uppercase">
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
const SecDesktopNav = () => {
  return (
    <div className="lg:block hidden">
      <NavigationMenu>
        <NavigationMenuList className="gap-5 text-black font-bold text-base uppercase">
          {NavItems.map((item) =>
            item.subItems ? (
              <NavigationMenuItem key={item.name} className="relative">
                <NavigationMenuTrigger className="text-black bg-transparent font-bold text-base uppercase">
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

const MobileNav = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="block lg:hidden relative z-[501]  ">
      <Sheet className="z-[501] relative max-sm:w-screen">
        <SheetTrigger asChild className={className}>
          <div className="text-white cursor-pointer">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent className="z-[502] max-sm:w-screen">
          <NavigationMenu>
            <NavigationMenuList className="gap-5 text-white font-bold flex-col text-base uppercase text-left items-start ">
              {NavItems.map((item) =>
                item.subItems ? (
                  <NavigationMenuItem key={item.name} className="relative ">
                    <div
                      onClick={() => setIsActive(!isActive)}
                      className="text-white font-bold text-base cursor-pointer uppercase flex gap-2 "
                    >
                      {item.name}
                      <ChevronDown />
                    </div>
                    {/* <NavigationMenuContent className=" font-bold text-base uppercase "> */}
                    {isActive && (
                      <NavigationMenuList className="grid w-max text-left items-start  p-2  ">
                        {item.subItems.map((subItem) => (
                          <NavigationMenuItem key={subItem.name}>
                            <ListItem
                              className="text-balance"
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
