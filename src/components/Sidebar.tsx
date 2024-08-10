"use client";
import React from "react";
import Logo from "@/../public/logo.svg";
import Image from "next/image";
import { LogOut, Settings, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const path = usePathname();

  return (
    <div className="flex h-full w-20 flex-col bg-white p-4">
      <Image
        src={Logo as HTMLImageElement}
        height={1000}
        width={1000}
        className="h-10 w-auto"
        alt="cat"
      />
      <div className="mt-4 flex flex-1 flex-col gap-4">
        <Link
          className={`flex items-center justify-center rounded-md p-2 hover:cursor-pointer ${
            path.includes("/dashboard") ? "bg-background" : ""
          }`}
          href={"/dashboard"}
        >
          <Users2 color="black"/>
        </Link>
        <Link
          className={`flex items-center justify-center rounded-md p-2 hover:cursor-pointer ${
            path.includes("/services") ? "bg-background" : ""
          }`}
          href={"/services"}
        >
          <Settings color="black"/>
        </Link>
      </div>
      <div className="p-4">
        <LogOut color="red" />
      </div>
    </div>
  );
};

export default Sidebar;
