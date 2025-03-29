// import React from 'react'
import { Button } from './ui/button'

const RecentsWork = () => {
  return (
    <div className='section'>
      <div className='bg-zinc-50 w-full min-h-screen'>
        <div className='flex flex-col'>
            <div className='py-6 md:py-16 px-4'>
                <h2 className='text-zinc-950 text-2xl md:text-3xl font-bold font-sans text-center'>Recents Work</h2>
                <p className='text-gray-500 text-lg md:text-lg py-6 md:py-10 text-center'>Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-16 mb-10'>
                {/* 1 */}
                <div className="">
                    <img src="public/recent1.svg" alt="" className='w-screen h-64 md:h-96 object-cover rounded-lg' />
                    <h3 className='text-xl md:text-2xl font-bold font-sans py-1'>Work name here</h3>
                    <p className='text-gray-500 text-lg md:text-lg py-2 md:py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <Button className='bg-green-500 text-white px-4 py-2 rounded-sm font-sans text-sm'>Know more</Button>
                </div>
                {/* 2 */}
                <div className="">
                    <img src="public/recent2.svg" alt="" className='w-screen h-64 md:h-96 object-cover rounded-lg' />
                    <h3 className='text-xl md:text-2xl font-bold font-sans py-1'>Work name here</h3>
                    <p className='text-gray-500 text-lg md:text-lg py-2 md:py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <Button className='bg-green-500 text-white px-4 py-2 rounded-sm font-sans text-sm'>Know more</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecentsWork
