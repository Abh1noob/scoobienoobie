"use client";
import BatteryAsset from "@/assets/icons/BatteryAsset";
import BreaksAsset from "@/assets/icons/BreaksAsset";
import CustomerAsset from "@/assets/icons/CustomerAsset";
import EngineAsset from "@/assets/icons/EngineAsset";
import ExteriorAsset from "@/assets/icons/ExteriorAsset";
import TireAsset from "@/assets/icons/TireAsset";
import Breaks from "@/components/tabs/Breaks";
import Customer from "@/components/tabs/Customer";
import Engine from "@/components/tabs/Engine";
import Exterior from "@/components/tabs/Exterior";
import Tire from "@/components/tabs/Tire";
import { Badge } from "@/components/ui/badge";
import { CustomBadge } from "@/components/ui/CustomBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

type TabItem = {
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
  notification?: number;
  route: string;
};

const tabItems: TabItem[] = [
  {
    icon: <TireAsset />,
    label: "Tires",
    content: <Tire />,
    notification: 10,
    route: "/tires",
  },
  {
    icon: <BatteryAsset />,
    label: "Battery",
    content: <Battery />,
    notification: 10,
    route: "/battery",
  },
  {
    icon: <ExteriorAsset />,
    label: "Exterior",
    content: <Exterior />,
    notification: 10,
    route: "/exterior",
  },
  {
    icon: <BreaksAsset />,
    label: "Brakes",
    content: <Breaks />,
    notification: 10,
    route: "/brakes",
  },
  {
    icon: <EngineAsset />,
    label: "Engine",
    content: <Engine />,
    notification: 10,
    route: "/engine",
  },
  {
    icon: <CustomerAsset />,
    label: "Customer",
    content: <Customer />,
    notification: 10,
    route: "/customer",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { inspection_id }: { inspection_id: string } = useParams();
  const router = useRouter();
  const handleTabClick = (route: string) => {
    router.push("/services/" + inspection_id + route);
  };

  return (
    <div className="flex h-full flex-col p-8">
      <div className="flex flex-row gap-4 text-lg font-medium text-[#45464E]">
        <span className="">Inspection ID #{inspection_id}</span>
        <CustomBadge variant={"pending"}>In Progress</CustomBadge>
      </div>
      <div className="-ml-1 mt-8">
        <Tabs defaultValue="Tires">
          <TabsList className="flex flex-row gap-4">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className="flex gap-2"
                onClick={() => handleTabClick(tab.route)}
              >
                {tab.icon}
                <p>{tab.label}</p>
                <p className="rounded-full border-[1px] border-[#DDE3EE] bg-[#F7F9FC] px-3 py-1">
                  {tab.notification}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="mt-8 flex-1 rounded-2xl bg-white p-8">{children}</div>
    </div>
  );
};

export default Layout;
