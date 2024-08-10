"use client";
import NotificationAsset from "@/assets/icons/NotificationAsset";
import { HomeIcon, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const path = usePathname();
  const breadcrumb = path.split("/").filter(Boolean);

  return (
    <div className="flex w-full flex-col items-start bg-white">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <p className="mx-2 text-xl font-medium capitalize text-[#45464E]">{breadcrumb[0]}</p>
        <div className="m-2 flex flex-row items-center gap-2">
          <div className="transition-all hover:scale-[1.02] hover:cursor-pointer active:scale-[0.98]">
            <NotificationAsset height={25} width={25} />
          </div>
          <div className="rounded-lg bg-black/10 p-2 transition-all hover:scale-[1.02] hover:cursor-pointer active:scale-[0.98]">
            <User />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#F1F3F9]" />
      <div className="flex flex-row items-center gap-1 p-2">
        <HomeIcon fill="#FECD03" /> <span className="text-[#45464E]">/</span>
        <Breadcrumb pathSegments={breadcrumb} />
      </div>
    </div>
  );
};

interface BreadcrumbProps {
  pathSegments: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathSegments }) => {
  return (
    <nav className="flex items-center gap-1">
      <Link href="/" className="text-[#8B8D97] hover:text-[#45464E]">
        Home 
      </Link>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={index}>
            <span className="text-[#8B8D97]">/</span>
            <Link href={path} className="text-[#8B8D97] hover:text-[#45464E]">
              {segment}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Navbar;
