import React from "react";

const Category = ({category,color,index}) => {
  return (
    <div
      className="flex flex-col items-center justify-start gap-[0.25rem] text-shade-4"
    >
      <div className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0">
        <div
          className="absolute h-full w-full top-[0.65%] right-[-0.6%] bottom-[-0.65%] left-[0.6%] rounded-37xl rounded-[56px]"
          style={{ background: index === color ? '#f0ece9':"black",transition:"ease-in-out  0.5s"}}
        />
        <img
          className="absolute top-[calc(50%-_23px)] left-[calc(50%-_22px)] w-[2.7rem] h-[2.9rem] object-cover"
          alt=""
          src={category.image}
        />
      </div>
      <div className="relative font-medium">{category.name}</div>
    </div>
  );
};

export default Category;
