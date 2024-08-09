import React from "react";
import Logo from "@/../public/logo.svg";
import Image from "next/image";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex h-full w-20 flex-col p-4 bg-white">
      <Image
        src={Logo}
        height={1000}
        width={1000}
        className="h-10 w-auto"
        alt="cat"
      />
      <div className="flex-1"></div>
      <div className="p-4">
        <LogOut color="red" />
      </div>
    </div>
  );
};

export default Sidebar;
