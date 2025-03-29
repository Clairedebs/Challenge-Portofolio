// import React from 'react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage } from './ui/avatar'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className="section">
      <div className="bg-zinc-950 w-full min-h-screen">
        <div className="flex flex-col">
          <div className="py-8 md:py-16 px-4">
            <h2 className='text-white text-2xl md:text-3xl font-bold font-sans text-center'>Testimonials</h2>
            <p className='text-gray-400 text-lg md:text-lg py-6 md:py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo hic distinctio in, harum quibusdam sint, rerum perferendis, reiciendis veniam tempore ea dolorum earum deserunt doloremque sunt quisquam debitis blanditiis!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-16 mb-16">
            {/* 1 */}
            <div className="relative">
            <Card className='bg-inherit border-gray-700'>
              <CardContent>
                <p className='text-gray-400 text-lg md:text-lg py-6 md:py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/client1.svg" />
                    </Avatar>
                    <h3 className='text-white text-lg font-bold font-sans'>John Doe</h3>
                </div>
              </CardContent>
            </Card>
            <div className='absolute top-0 left-2.5 grid place-items-center translate-x-1 -translate-y-1 bg-inherit'>
                < Quote className='' size={20} color='white'/>
            </div>
            </div>
            {/* 2 */}
            <div className='relative'>
            <Card className='bg-inherit border-gray-700'>
              <CardContent>
                <p className='text-gray-400 text-lg md:text-lg py-6 md:py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/client2.svg" />
                    </Avatar>
                    <h3 className='text-white text-lg font-bold font-sans'>John Doe</h3>
                </div>
              </CardContent>
            </Card>
            <div className='absolute top-0 left-2.5 grid place-items-center translate-x-1 -translate-y-1 bg-inherit'>
                < Quote className='' size={20} color='white'/>
            </div>
            </div>
            {/* 3 */}
            <div className='relative'>
            <Card className='bg-inherit border-gray-700'>
              <CardContent>
                <p className='text-gray-400 text-lg md:text-lg py-6 md:py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/client4.svg" />
                    </Avatar>
                    <h3 className='text-white text-lg font-bold font-sans'>John Doe</h3>
                </div>
              </CardContent>
              <div className='absolute top-0 left-2.5 grid place-items-center translate-x-1 -translate-y-1 bg-inherit'>
                < Quote className='' size={20} color='white'/>
            </div>
            </Card>
            </div>
            {/* 4 */}
            <div className='relative'>
            <Card className='bg-inherit border-gray-700'>
              <CardContent>
                <p className='text-gray-400 text-lg md:text-lg py-6 md:py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/client1.svg" />
                    </Avatar>
                    <h3 className='text-white text-lg font-bold font-sans'>John Doe</h3>
                </div>
              </CardContent>
            </Card>
            <div className='absolute top-0 left-2.5 grid place-items-center translate-x-1 -translate-y-1 bg-inherit'>
                < Quote className='' size={20} color='white'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
