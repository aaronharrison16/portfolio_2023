'use client'

import { useSectionChanged } from "@/app/utils";
import NavButton from "./NavButton"
import { Hamburger } from "@/app/Components";
import { useState } from "react";

const Nav = () => {
  const [checked, onCheckedChanged] = useState<boolean>(false);
  const activeView = useSectionChanged();

  const isActiveView = (sectionId: string): boolean => {
    console.log(sectionId == activeView)
    return (activeView === sectionId)
  }

  const navigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    console.log(section)

    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="glass nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="sm:hidden">
            <Hamburger
              checked={checked}
              onCheck={onCheckedChanged}
            />
          </div>

          <div className="flex flex-1 items-center justify-start sm:justify-between h-full">
            <NavButton sectionId="hero" onClick={navigate} title="aaronharrison.dev" />

            <div className="hidden sm:ml-6 sm:block h-full">
              <div className="flex space-x-4 h-full">
                <NavButton
                  sectionId="about"
                  onClick={navigate}
                  active={isActiveView('about')}
                  title="about"
                />

                {/* <NavButton sectionId="skills" onClick={navigate} title="expertise" /> */}
                <NavButton sectionId="experience" onClick={navigate} title="experience" />
                {/* <NavButton sectionId="projects" onClick={navigate} title="projects" /> */}
              </div>
            </div>
          </div>
          
          
        </div>
      </div>

      {checked && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav