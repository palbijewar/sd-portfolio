'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"; 

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
          <Link href={"/"} >
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Expertise">
           <div className="flex flex-col space-y-4 text-sm" >
           <HoveredLink href="/expertise" >Projects</HoveredLink>
           <HoveredLink href="/expertise" >All Projects</HoveredLink>
           <HoveredLink href="/expertise" >ml model deployment</HoveredLink>
           <HoveredLink href="/expertise" >Deep Learning Model Optimization</HoveredLink>
           <HoveredLink href="/expertise" >synthetic data generation</HoveredLink>
           <HoveredLink href="/expertise" >ml solution design</HoveredLink>
           <HoveredLink href="/expertise" >end-to-end project execution</HoveredLink>
           <HoveredLink href="/expertise" >statistical analysis</HoveredLink>
           </div>
          </MenuItem>
          <Link href={"/contact"} >
          <MenuItem setActive={setActive} active={active} item="Contact">
            
            </MenuItem>
          </Link>
      </Menu>
    </div>
  )
}
