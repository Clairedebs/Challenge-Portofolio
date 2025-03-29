import {
    Menubar,
    // MenubarContent,
    // MenubarItem,
    MenubarMenu,
    // MenubarSeparator,
    // MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

// import React from 'react'

const Nav2 = () => {
  return (
    <div>
      <Menubar className="bg-slate-800 text-gray-500 opacity-90 max-w-[1000px] mx-50 rounded-b-xl">
        <MenubarMenu>
            <MenubarTrigger className="font-mono bg-inherit">
                <div className="font-mono">Home</div>
            </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default Nav2

