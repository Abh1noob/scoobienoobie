"use client";
import { CustomBadge } from "@/components/ui/CustomBadge";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { inspection_id }: { inspection_id: string } = useParams();

  return (
    <>
      <div className="flex flex-row gap-4 text-lg font-medium text-[#45464E]">
        <div className="flex flex-row gap-2 p-8">
          <span className="">Inspection ID #{inspection_id}</span>
          <CustomBadge variant={"pending"}>In Progress</CustomBadge>
        </div>
      </div>
      <div className="mx-8 flex-1 rounded-2xl"></div>
    </>
  );
};

export default Page;
