// import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
// import Workit from './Workit'


const FirstMain = () => {
  return (
    <div className='bg-zinc-950 w-full min-h-screen'>
        <div className="flex flex-col gap-4 items-start">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 pt-10 md:pt-40 px-4 md:px-36">
        {/* Image comes first on mobile */}
        <div className="block md:hidden w-[300px]">
            <img 
                src="/claire.jpg" 
                alt="Profile" 
                className="rounded-full aspect-square object-cover w-full"
            />
        </div>
        <div className="flex flex-col gap-4 items-start text-center md:text-left">
            <div className="">
                <p className='text-white text-3xl md:text-4xl font-bold'>Claire Deborah</p>
            </div>
            <div className="">
                <p className='text-gray-500 text-sm md:text-base font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis repellendus earum dolor aperiam, placeat assumenda ut accusantium omnis? Hic quis praesentium accusantium et adipisci. Neque possimus deserunt est suscipit!</p>
            </div>
            <Button className='bg-green-400 text-white text-md font-mono p-6 md:p-8'>Let's get started <MoveRight className="ml-2" /></Button>
        </div>
        {/* Image shows on desktop */}
        <div className="hidden md:block w-[800px]">
            <img 
                src="src/assets/claire.jpg" 
                alt="Profile" 
                className="rounded-full aspect-square object-cover w-full"
            />
        </div>
      </div>
      <div className="font-mono text-white text-lg md:text-xl mx-4 md:mx-36 pt-6">Worked with</div>
      <div className="mx-4 md:mx-36 pt-5 mb-4">
        <ul className="flex flex-wrap flex-row gap-4 md:gap-15 items-start">
            <li><Button className="w-full md:w-auto">Work</Button></li>
            <li><Button className="w-full md:w-auto">Work</Button></li>
            <li><Button className="w-full md:w-auto">Work</Button></li>
            <li><Button className="w-full md:w-auto">Work</Button></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default FirstMain
