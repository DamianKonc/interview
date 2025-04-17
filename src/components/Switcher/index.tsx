import React, { useState } from "react";

function Switcher() {
  const [activeTab, setActiveTab] = useState("Houses");
  const tabs = ["Houses", "Apartments"];
  return (
    <div
      className="
      group
      px-[8px] py-[8px]
      flex 
      gap-12
      bg-[#EDEAFF] 
      rounded-[8px] 
      w-[352px]
      "
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
            focus:outline-none
            focus:bg-[#3D1EFE]/20
            w-full
            h-[48px]
            rounded-[8px] 
            active:border-2
              ${
                isActive
                  ? "text-buttons-secondary-primary bg-white text-[#6851FF] group-hover:bg-[#D6D8E5] group-hover:drop-shadow-[#0E08540D] group-hover:drop-shadow-lg"
                  : "text-[#7B8191] bg-transparent group-hover:text-[#6851FF]"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default Switcher;
