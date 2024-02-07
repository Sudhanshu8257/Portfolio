"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
/*
https://github.com/Sudhanshu8257
https://www.linkedin.com/in/sudhanshu-lohana-b7834821b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
https://www.instagram.com/sudhanshulohana?igsh=MW84MWM2YXFzMWd1aw==
https://x.com/Sudhans83606527?t=9XsLCCPPzmoR9JlwngeYUA&s=09
*/
const Contact = () => {
  const github = (
    <Link
      href={"https://github.com/Sudhanshu8257"}
      className="flex items-center justify-center rounded-md bg-white bg-opacity-[0.02] p-4 lg:rounded-full"
    >
      <Image
        src={"/assets/icons/github.svg"}
        width={32}
        height={32}
        alt="icon"
      />
    </Link>
  );
  const likedin = (
    <Link
      href="https://www.linkedin.com/in/sudhanshu-lohana-b7834821b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      className="flex items-center justify-center rounded-md bg-white bg-opacity-[0.02] p-4 lg:rounded-full"
    >
      <Image
        src={"/assets/icons/linkedin.svg"}
        width={32}
        height={32}
        alt="icon"
      />
    </Link>
  );
  const x = (
    <Link
      href="https://x.com/Sudhans83606527?t=9XsLCCPPzmoR9JlwngeYUA&s=09"
      className="flex items-center justify-center rounded-md bg-white bg-opacity-[0.02] p-4 lg:rounded-full"
    >
      <Image src={"/assets/icons/x.svg"} width={32} height={32} alt="icon" />
    </Link>
  );
  const instagram = (
    <Link
      href={
        "https://www.instagram.com/sudhanshulohana?igsh=MW84MWM2YXFzMWd1aw=="
      }
      className="flex items-center justify-center rounded-md bg-white bg-opacity-[0.02] p-4 lg:rounded-full"
    >
      <Image
        src={"/assets/icons/instagram.svg"}
        width={32}
        height={32}
        alt="icon"
      />
    </Link>
  );
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
    <section className="flex w-full flex-col items-center  px-4 py-16 lg:px-32 lg:py-28">
      <div className="mb-20 flex items-center justify-center gap-3 lg:mb-24 ">
        <div className="flex shrink-0 items-center">
          <div className="size-2.5 rotate-45 bg-primary"></div>
          <div className="h-[2.5px] w-[90px] rounded-sm bg-primary max-sm:w-[40px]"></div>
        </div>
        <span className="text-[24px] font-black text-primary lg:text-[34px]">
          Contact Me
        </span>
        <div className="flex shrink-0 items-center">
          <div className="h-[2.5px] w-[90px] rounded-sm bg-primary max-sm:w-[40px]"></div>
          <div className="size-2.5 rotate-45 bg-primary"></div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-32 max-lg:flex-col max-lg:gap-4">
        <div className="flex items-center justify-center gap-3 lg:hidden">
          {github}
          {likedin}
          {x}
          {instagram}
        </div>
        <div className="flex flex-col items-center justify-center gap-10 max-lg:hidden">
          {github}
          {likedin}
        </div>
        <div className="flex flex-col  items-center justify-center gap-6 max-lg:flex-col-reverse max-lg:gap-4">
          <div
            onClick={handleMailClick}
            className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-white bg-opacity-[0.02] p-4 max-lg:w-full"
          >
            <Image
              src={"/assets/icons/mail.svg"}
              width={32}
              height={32}
              alt="icon"
              className="max-lg:size-[28px]"
            />
            <span className=" text-[16px] font-bold max-lg:text-[14px]">
              lohanasudhanshu8257@gmail.com
            </span>
          </div>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <div className="flex items-center justify-center gap-3 rounded-md bg-white bg-opacity-[0.02] p-4 max-lg:w-full">
              <Image
                src={"/assets/icons/location.svg"}
                width={32}
                height={32}
                alt="icon"
                className="max-lg:size-[28px]"
              />
              <Link
                href={"https://maps.app.goo.gl/pchqAPbYdZrDkdNW6"}
                className="text-[16px] font-bold max-lg:text-[14px] "
              >
                jaipur,Rajasthan
              </Link>
            </div>
            <div
              onClick={() => navigator.clipboard.writeText("7976761135")}
              className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-white bg-opacity-[0.02] p-4 max-lg:w-full"
            >
              <Image
                src={"/assets/icons/phone.svg"}
                width={32}
                height={32}
                alt="icon"
                className="max-lg:size-[28px]"
              />
              <span className="text-[16px] font-bold max-lg:text-[14px]">
                +91 7976761135
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 max-lg:hidden">
          {x}
          {instagram}
        </div>
      </div>
    </section>
  );
};

export default Contact;
