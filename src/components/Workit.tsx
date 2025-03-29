import React from 'react'
import { Button } from './ui/button'

const Workit = () => {
  return (
    <div className="section">
      <div className='bg-zinc-50 w-full min-h-screen'>
        <div className="flex flex-col">
          <div className="py-8 md:py-16 px-4">
            <h2 className='text-zinc-950 text-2xl md:text-3xl font-bold font-sans text-center'>Case Studies</h2>
            <p className='text-gray-400 text-lg md:text-xl py-6 md:py-10 text-center'>Getting your first job in tech can be hard. Here are some tips and tricks that helped me land my first role.</p>
          </div>
          <div className="flex flex-col gap-8 md:gap-12 px-4 md:px-16 mb-16">
            {/* 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="py-5 order-2 md:order-1">
                <span className='bg-orange-100 text-orange-500 p-1.5 px-2 rounded-sm font-sans text-sm'>Figma</span>
                <h3 className='text-xl md:text-2xl font-bold font-sans py-4'>Work name here</h3>
                <p className="text-gray-400 py-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure est minima quasi alias exercitationem magni consequuntur beatae atque libero deserunt similique, iste, perspiciatis excepturi consequatur ex mollitia suscipit vitae.</p>
                <Button className='bg-orange-500 text-white px-4 py-2 rounded-sm font-sans text-sm'>View case study</Button>
              </div>
              <div className="order-1 md:order-2">
                <img src="src/assets/work1.svg" alt="workit" className='rounded-lg w-screen h-64 md:h-96 object-cover' />
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="order-1">
                <img src="src/assets/work2.svg" alt="workit" className='rounded-lg w-screen h-64 md:h-96 object-cover' /> 
              </div>
              <div className="py-5 order-2">
                <span className='bg-blue-100 text-blue-500 p-1.5 px-2 rounded-sm font-sans text-sm'>React</span>
                <h3 className='text-xl md:text-2xl font-bold font-sans py-4'>Work name here</h3>
                <p className="text-gray-400 py-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure est minima quasi alias exercitationem magni consequuntur beatae atque libero deserunt similique, iste, perspiciatis excepturi consequatur ex mollitia suscipit vitae.</p>
                <Button className='bg-blue-500 text-white px-4 py-2 rounded-sm font-sans text-sm'>View case study</Button>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="py-5 order-2 md:order-1">
                <span className='bg-green-100 text-green-500 p-1.5 px-2 rounded-sm font-sans text-sm'>Node</span>
                <h3 className='text-xl md:text-2xl font-bold font-sans py-4'>Work name here</h3>
                <p className="text-gray-400 py-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure est minima quasi alias exercitationem magni consequuntur beatae atque libero deserunt similique, iste, perspiciatis excepturi consequatur ex mollitia suscipit vitae.</p>
                <Button className='bg-green-500 text-white px-4 py-2 rounded-sm font-sans text-sm'>View case study</Button>
              </div>
              <div className="order-1 md:order-2">
                <img src="src/assets/work3.svg" alt="workit" className='rounded-lg w-screen h-64 md:h-96 object-cover' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workit
