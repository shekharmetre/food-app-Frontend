import React, { useState } from "react";
import SideBar from "../components/admin/SideBar";
const Calender = () => {
  const data = ["Month", "Week", "Timeline"];
  const [Menu, setMenu] = useState(false);
  return (
    <div>
      <section
        id="calendar"
        style={{ background: "#f0ece9" }}
        className="w-full h-[100vh] overflow-scroll"
      >
        <div className="flex justify-between p-3">
          <div
            className={`md:block ${Menu ? "" : "hidden"}`}
            style={{ transition: "ease-in-out 2s" }}
          >
            <SideBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calender;

{
  /* <div className="flex border-2 p-2 rounded-md">
				{data.map((item,index)=>(
					<p className="p-2">{item}</p>
				))}
			</div> */
}
