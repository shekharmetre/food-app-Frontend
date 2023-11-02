import React from 'react'
import { Homepage } from '../../utils/data'
import start from '../assets/detail/star.png'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { detailItem } from '../../store/slice/DetailItem'
const SearchHome = () => {
	const navigation = useNavigate()
	const dispatch = useDispatch()
	const handleClick = (item) => {
		dispatch(detailItem(item))
		navigate('/detail')()
	  }
  return (
	<>
	<section className='absolute top-[32.38rem] left-[1.25rem] items-start justify-start gap-[1rem] text-[1.25rem] max-h-screen overflow-scroll'>
	<h1 className='text-[18px] font-semibold mb-3'>This Restaurant best food in Bidar</h1>
	<div className='grid grid-cols-2 gap-5 place-content-center rounded-md md:grid-flex-row' >
		{Homepage.map((item,index)=>(
			<div key={index} style={{background:"#ffffff"}} className='rounded-2xl flex flex-col  cursor-pointer' onClick={()=>handleClick(item)} >
					<img src={item.image} alt="" className='w-44 h-28 object-cover rounded-2xl' />
					<div className='px-2 mt-2'>
						<h2 className='text-[16px] font-mono'>{item.name}</h2>
						<div className='flex gap-2'>
								<img src={start} alt="" />
								<p className='text-sm font-semibold'>{item.rating}. </p>
								<p className='text-sm font-semibold'>Deliver 20 min</p>
						</div>
						<p className='text-sm opacity-70'>{item.info}..</p>
					</div>
			</div>
		))}
	</div>
	</section>
	</>
  )
}

export default SearchHome