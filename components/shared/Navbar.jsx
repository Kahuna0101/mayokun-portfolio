"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [toggle, setToggle] = useState(false);

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

      <div className="flex md:hidden w-8 h-8 relative rounded-full justify-center items-center bg-secondary-color">
        <Image
          src="/hamburger.svg"
          width={24}
          height={24}
          alt="hamburger"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={() => setToggle(true)}
          className="cursor-pointer"
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-white bg-menu-bg bg-cover bg-repeat shadow-md"
          >
            <Image
              src="/close.svg"
              width={24}
              height={24}
              alt="close"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onClick={() => setToggle(false)}
              className="mx-2 my-4 cursor-pointer"
            />
            <ul className="m-0 p-0 list-none h-full w-full flex flex-col justify-start items-start">
              {navs.map((nav) => (
                <li key={nav.title} className="m-4">
                  <Link
                    href={nav.href}
                    onClick={() => setToggle(false)}
                    className="text-gray-600 text-base uppercase font-medium hover:text-secondary-color"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

{
  /*
<nav className="w-full flex justify-between items-center px-4 py-8 bg-white bg-opacity-25 backdrop-blur fixed z-20">
      <div className="flex justify-start items-center pl-8">
        <Link href="/">
          <h2 className=" text-2xl font-extrabold text-secondary-color">MAYOKUN</h2>
        </Link>
      </div>

      <ul className="md:flex flex-1 justify-center items-center list-none hidden">
        {["home", "about", "work", "skills", "contact"].map(
          (item) => (
            <li
              className="flex justify-center flex-col items-center text-left text-gray-700 mx-4 cursor-pointer"
              key={`link-${item}`}
            >
              <Link
                href={`#${item}`}
                className="uppercase font-semibold hover:text-secondary-color"
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      <div className="flex md:hidden w-8 h-8 relative rounded-full justify-center items-center bg-secondary-color">
        <Image
          src="/hamburger.svg"
          width={24}
          height={24}
          alt="hamburger"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={() => setToggle(true)}
          className="cursor-pointer"
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-white bg-menu-bg bg-cover bg-repeat shadow-md"
          >
            <Image
              src="/close.svg"
              width={24}
              height={24}
              alt="close"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onClick={() => setToggle(false)}
              className="mx-2 my-4 cursor-pointer"
            />
            <ul className="m-0 p-0 list-none h-full w-full flex flex-col justify-start items-start">
              {[
                "home",
                "about",
                "work",
                "skills",
                "contact",
              ].map((item) => (
                <li key={item} className="m-4">
                  <Link
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className="text-gray-600 text-base uppercase font-medium hover:text-secondary-color"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
*/
}
