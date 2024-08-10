"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  type TabItem = {
    icon?: React.ReactNode;
    label: string;
    notification?: number;
    route: string;
  };

  const tabItems: TabItem[] = [
    {
      label: "Upcoming Services",
      notification: 10,
      route: "/upcoming",
    },
    {
      label: "Completed Services",
      route: "/completed",
    },
  ];

  const handleTabClick = (route: string) => {
    router.push("/services/" + route);
  };
  return (
    <div className="flex h-full flex-col p-8">
      <div className="flex flex-row gap-4 text-lg font-medium text-[#45464E]">
        <span className="">Service</span>
      </div>
      <div className="mt-8 flex-1 rounded-2xl bg-white p-8">
        <Tabs defaultValue="Upcoming Services" className="mb-8">
          <TabsList className="flex flex-row gap-2">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className="flex gap-2"
                onClick={() => handleTabClick(tab.route)}
              >
                {tab.icon}
                <p>{tab.label}</p>
                {tab.notification && (
                  <p className="rounded-full border-[1px] border-[#DDE3EE] bg-[#F7F9FC] px-3 py-1">
                    {tab.notification}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
