import React from 'react'

const Header = () => {
  return (
	<div className=" top-[1rem] left-[calc(50%_-_175px)] w-[21.88rem] flex flex-row items-center sticky justify-between text-tint-8 z-10 bg-transparent">
        <div className="rounded-3xl flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
          <img className="relative w-[1.5rem] h-[1.5rem]" alt="" src={fourth} />
        </div>
        <div className="flex flex-col items-center justify-start gap-[0.25rem]">
          <div className="flex flex-row items-start justify-center gap-[0.25rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem]"
              alt=""
              src={fifth}
            />
            <div className="relative font-semibold">Amanthrana Hotel</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.25rem] text-shade-4">
            <div className="relative tracking-[0.01em]">Bidar</div>
            <img className="relative w-[1rem] h-[1rem]" alt="" src={sixth} />
          </div>
        </div>
        <div className="rounded-3xl flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src={seventh}
          />
        </div>
      </div>
  )
}

export default Header