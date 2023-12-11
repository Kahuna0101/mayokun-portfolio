"use client";

import Link from "next/link";

import SocialMedia from "./SocialMedia";

const Navbar = () => {

  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-white bg-opacity-25 backdrop-blur fixed z-20">
      <div className="flex justify-start items-center">
        <Link href="/">
          <h2 className=" text-2xl font-extrabold text-secondary-color">
            MAYOKUN
          </h2>
        </Link>
      </div>

      <SocialMedia />
    </nav>
  );
};

export default Navbar;