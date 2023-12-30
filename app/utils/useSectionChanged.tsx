import { useEffect, useState } from "react";

export type viewType = 'hero' | 'about' | 'skills' | 'projects'

export default function useSectionChanged() {
  const [activeView, setActiveView] = useState<viewType>('hero')

  useEffect(() => {
    const isInViewport = (rect:DOMRect | undefined): boolean => {
      let html = null;

      if (document)
      {
        html = document.documentElement;
      }

      if (!rect || !html)
      {
        return false;
      }

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
      );
    }

    addEventListener('scroll', (s) => {
      const hero = document.getElementById('hero')?.getBoundingClientRect();
      const about = document.getElementById('about')?.getBoundingClientRect();
      const skills = document.getElementById('skills')?.getBoundingClientRect();
      const projects = document.getElementById('projects')?.getBoundingClientRect();

      if (isInViewport(hero))
      {
        setActiveView('hero')
      }
      else if (isInViewport(about))
      {
        setActiveView('about')
      }
      else if (isInViewport(skills))
      {
        setActiveView('skills')
      }
      else if (isInViewport(projects))
      {
        setActiveView('projects')
      }
    })
  }, [])

  return activeView
}
