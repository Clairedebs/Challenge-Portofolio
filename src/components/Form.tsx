// import React from 'react'
// import { Form, FormControl, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Card } from './ui/card'
import { Textarea } from './ui/textarea'

const Form1 = () => {
  return (
    <div className='bg-zinc-950 w-full min-h-screen'>
      <div className="flex flex-col">
          <div className="py-8 md:py-8 px-4">
            <h2 className='text-white text-2xl md:text-3xl font-bold font-sans text-center'>Get in touch</h2>
            <p className='text-gray-400 text-lg md:text-lg py-6 md:py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo hic distinctio in, harum quibusdam sint, rerum perferendis, reiciendis veniam tempore ea dolorum earum deserunt doloremque sunt quisquam debitis blanditiis!</p>
          </div>
          <div className="form">
            <Card className='w-full md:w-1/2 mx-auto  bg-zinc-950  flex-col gap-4 border-none border-2 rounded-lg md:p-8 p-4'>
                <form action="" method="post" className='flex flex-col gap-4'>
                    <div className="form-group flex flex-col gap-2">
                        <Label htmlFor="email" className='text-gray-400 font-sans'>Email</Label>
                        <Input type="email" id="email" placeholder='Please enter your email' className='bg-zinc-50 text-gray-400 rounded-sm' />
                    </div>
                <div className="form-group flex flex-col gap-2">
                    <Label htmlFor="mobile" className='text-gray-400 font-sans'>Mobile</Label>
                    <Input type="tel" id="mobile" placeholder='Enter your mobile number' className='bg-zinc-50 text-gray-400 rounded-sm' />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <Label htmlFor="message" className='text-gray-400 font-sans'>Message</Label>
                    <Textarea id="message" placeholder='Enter your message' className='bg-zinc-50 text-gray-400 rounded-sm' />
                </div>
                    <Button type="submit" className='bg-green-500 text-white px-4 py-2 rounded-sm font-sans text-sm'>Submit</Button>
                </form>
            </Card>
          </div>
      </div>
    </div>
  )
}

export default Form1
