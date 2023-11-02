import React, { useState, Suspense } from "react";
import { sidebarMenu } from "../../../utils/data";
const Menulist = React.lazy(() => import("./Menulist"));

const SideBar = () => {
  const [click, setClick] = useState(0);
  return (
    <div
      className={`h-[100vh] w-[14rem] relative p-2 rounded-tl-3xl shadow-2xl`}
      style={{ background: "#051135", transition: "ease-in-out 0.5s" }}
    >
      <h2 className="text-white font-mono font-semibold backdrop-blur-md text-xl">
        Amanthrana
      </h2>
      <div className="flex flex-col gap-5 mt-10">
        {sidebarMenu.map((item, index) => (
          <div key={index} onClick={() => setClick(index)}>
            <Suspense fallback={<div>Menu Item Loading...</div>}>
              <Menulist
                image={item.image}
                name={item.name}
                index={index}
                clickevent={click}
              />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
