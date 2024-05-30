'use client'

import { useSectionChanged, Navigate } from "@/app/utils";
import NavButton from "./NavButton"
import { Hamburger } from "@/app/Components";
import { useState } from "react";

interface navItem {
  title: string,
  id: string
}

const navButtons: Array<navItem> = [
  {
    title: 'home',
    id: 'hero',
  },
  {
    title: 'about',
    id: 'about',
  },
  {
    title: 'experience',
    id: 'experience',
  },
]

const Nav = () => {
  const [checked, onCheckedChanged] = useState<boolean>(false);
  const activeView = useSectionChanged();
  const isActiveView = (sectionId: string): boolean => (activeView === sectionId)

  const NavigateFromDrawer = (sectionId: string) => {
    Navigate(sectionId);
    onCheckedChanged(false);
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
            <NavButton
              sectionId="hero"
              onClick={Navigate}
              title="aaronharrison.dev"
              active={isActiveView('hero')}
            />

            <div className="hidden sm:ml-6 sm:block h-full">
              <div className="flex space-x-4 h-full">
                {navButtons.map(n => (
                  <NavButton
                    key={n.id}
                    sectionId={n.id}
                    onClick={Navigate}
                    active={isActiveView(n.id)}
                    title={n.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {checked && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navButtons.map(n => (
              <NavButton
                key={n.id}
                sectionId={n.id}
                onClick={NavigateFromDrawer}
                active={isActiveView(n.id)}
                title={n.title}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav