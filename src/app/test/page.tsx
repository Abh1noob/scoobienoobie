import NumberInput from "@/components/ui/NumberInput";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-screen bg-white">
      <NumberInput label={"Tire Pressure For Left Front"} placeholder={"PSI"}/>
    </div>
  );
};

export default Page;