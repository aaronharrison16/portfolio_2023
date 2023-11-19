'use client';

import styles from './styles.module.css'
import { useEffect, useState } from "react"

type viewType = '#hero' | '#about' | '#skills' | '#projects'

const Blobs = () => {
  const [activeView, setActiveView] = useState<viewType>('#hero')
  const html = document.documentElement;

  useEffect(() => {
    
    addEventListener('scroll', (s) => {
      const hero = document.getElementById('hero')?.getBoundingClientRect();
      const about = document.getElementById('about')?.getBoundingClientRect();
      const skills = document.getElementById('skills')?.getBoundingClientRect();
      const projects = document.getElementById('projects')?.getBoundingClientRect();

      if (isInViewport(hero))
      {
        setActiveView('#hero')
      }
      else if (isInViewport(about))
      {
        setActiveView('#about')
      }
      else if (isInViewport(skills))
      {
        setActiveView('#skills')
      }
      else if (isInViewport(projects))
      {
        setActiveView('#projects')
      }
    })
  }, [])

  const isActiveView = (route: viewType): boolean => {
    return (activeView === route)
  }

  const isInViewport = (rect:DOMRect | undefined): boolean => {
    if (!rect)
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

  return (
    <div className={styles.blobOuterContainer}>
      <div className={styles.blobInnerContainer}>
        <div className={`${styles.greenBlob} ${isActiveView('#about') && styles.greenBlobMoved}`} />
        <div className={`${styles.yellowBlob} ${isActiveView('#skills') && styles.yellowBlobMoved}`} />
        <div className={`${styles.redBlob} ${isActiveView('#projects') && styles.redBlobMoved}`} />
      </div>
    </div>
  )
}

export default Blobs