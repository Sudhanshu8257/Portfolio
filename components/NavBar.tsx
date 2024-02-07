"use client";
import { navLinks } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const handleMailClick = () => {
    const email = "lohanasudhanshu@example.com";
    const subject = "Hello";
    const body = "I would like to get in touch with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <>
      <div className="flex h-[90px] w-full items-center justify-between px-4 py-12 lg:px-32 ">
        <Link href={"/"} className="font-pacifico text-[20px]">
          SL
        </Link>
        <div className="ml-24 flex items-center justify-center gap-10 text-[16px] font-bold max-lg:ml-0 max-sm:gap-4">
          {navLinks.map((link) => (
            <Link
              className={`capitalize hover:text-primary max-sm:text-sm ${
                (pathName === link.path ||
                  (pathName.startsWith("/projects") &&
                    link.path === "/projects")) &&
                "text-primary"
              }  text-base`}
              key={link?.label}
              href={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={handleMailClick}
          className="rounded-xl border-2 border-border bg-transparent p-3 font-black text-secondary max-lg:hidden"
        >
          Say Hello
        </button>
      </div>
    </>
  );
};

export default NavBar;
