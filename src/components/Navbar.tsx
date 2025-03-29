// import Link from "next/link";
// import {
//     Menubar,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarTrigger,
//   } from "@/components/ui/menubar"
import { Linkedin, X, FacebookIcon, Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-4 bg-zinc-900 text-gray-500 opacity-90 absolute top-0 left-0 right-0 z-50 md:mx-50 rounded-b-xl">
    
      <div className="hidden md:flex items-center space-x-6 ">
        <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Home</div>
        <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Case Studies</div>
        <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Testimonials</div>
        <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Recent work</div>
        <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Get in touch</div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <Menu size={24} />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer hover:text-white hover:shadow-amber-50 transition-colors"><Linkedin size={20} /></div>
        <div className="cursor-pointer hover:text-white transition-colors"><FacebookIcon size={20} /></div>
        <div className="cursor-pointer hover:text-white transition-colors"><X size={20} /></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-900 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Home</div>
            <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Case Studies</div>
            <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Testimonials</div>
            <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Recent work</div>
            <div className="font-mono cursor-pointer hover:text-white hover:translate-x-0.5">Get in touch</div>
          </div>
        </div>
      )}
    </nav>
  )
}