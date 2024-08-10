"use client";

import { CustomBadge } from "@/components/ui/CustomBadge";
import CustomButton from "@/components/ui/CustomButton";
import { DownloadIcon, PlayIcon } from "lucide-react";
import Link from "next/link";

import { useParams, usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const { inspection_id }: { inspection_id: string } = useParams();
  const path = usePathname();
  return (
    <>
      <div className="flex flex-row justify-between gap-4 p-8 text-lg font-medium text-[#45464E]">
        <div className="flex flex-row items-center gap-2">
          <span className="">Inspection ID #{inspection_id}</span>
          <CustomBadge variant={"pending"}>In Progress</CustomBadge>
        </div>
        <div className="flex h-fit flex-row gap-4">
          <CustomButton variant="outlined">
            <div className="flex flex-row items-center gap-2">
              <DownloadIcon />
              Download Manual
            </div>
          </CustomButton>
          <Link href={path + "/inspection"}>
            <CustomButton variant="filled">
              <div className="flex flex-row items-center gap-2">
                <PlayIcon />
                Start Inspection
              </div>
            </CustomButton>
          </Link>
        </div>
      </div>
      <div className="mx-8 flex-1 rounded-2xl"></div>
    </>
  );
};

export default Page;
