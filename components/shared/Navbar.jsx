"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const navs = [
  {title:'home', href:'#home'},
  {title:'about', href:'#about'},
  {title:'work', href:'#work'},
  {title:'skills', href:'#skills'},
  {title:'contact', href:'#contact'},
]

const Navbar = () => {

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white bg-opacity-25 backdrop-blur fixed z-20">
      <div className="flex justify-start items-center">
        <Link href="/">
          <h2 className=" text-2xl font-extrabold text-secondary-color">
            MAYOKUN
          </h2>
        </Link>
      </div>

      <NavigationMenu className="md:flex flex-1 justify-center items-center list-none hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            {navs.map((nav) => (
              <Link href={nav.href} legacyBehavior passHref key={nav.title}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="uppercase font-semibold hover:text-secondary-color">
                    {nav.title}
                  </p>
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;