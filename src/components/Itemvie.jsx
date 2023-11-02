import React from "react";

const Itemvie = () => {
  return (
    <div className="wrapper bg-gray-400 antialiased text-gray-900">
      <div>
        <img
          src="https://source.unsplash.com/random/350x350"
          alt=" random imgee"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
            </div>
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              A random Title
            </h4>
            <div className="mt-1">
              $1800
              <span className="text-gray-600 text-sm"> /wk</span>
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                4/5 ratings{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemvie;
