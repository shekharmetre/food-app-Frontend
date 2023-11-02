import React, { useState } from 'react'
import thirteen from "../assets/rectangle-25@2x.png";
const CartDesign = ({title,price,description}) => {
	const [count,setCount] = useState(0)
  return (
	<div className='bg-white shadow-sm shadow-black w-full h-28 rounded-lg flex gap-5 items-center'>
		<img src={thirteen} alt="" />
		<div className='py-3'>
			<p className='text-md font-semibold'>{title && title || "Get two pieces"}</p>
			<p className='text-orange-400 font-bold leading-5'>&#8377; {price && price || "456"}.00</p>
			<p className='text-[12px] mt-2 opacity-60 font-medium'>{description && description || "Lorem ipsum dolor sit amet consectetur, adipisicing."}</p>
		</div>
		<div className='pr-5 flex flex-col justify-between items-center h-full py-2'>
			<p className='bg-orange-400 px-2 text-white font-bold text-center text-xl rounded-md' onClick={()=>setCount((prev)=>prev + 1)}>+</p>
			<p>{count}</p>
			<p className='bg-slate-400 px-3 text-white font-bold text-xl rounded-md' onClick={()=>setCount((prev)=>prev - 1)}>-</p>
		</div>
	</div>
  )
}

export default CartDesign