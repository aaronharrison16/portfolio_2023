import { useEffect, useState } from "react";

export type viewType = 'hero' | 'about' | 'experience'

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
      const experience = document.getElementById('experience')?.getBoundingClientRect();

      if (isInViewport(hero))
      {
        setActiveView('hero')
      }
      else if (isInViewport(about))
      {
        setActiveView('about')
      }
      else if (isInViewport(experience))
      {
        setActiveView('experience')
      }
    })
  }, [])

  return activeView
}
