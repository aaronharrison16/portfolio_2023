import { ExperienceItemProps } from "./Experience";
import styles from './styles.module.css'

export default function ExperienceItem({company, jobTitle, duration, skills, description}: ExperienceItemProps) {
  return (
    <li className={styles.experienceListItem}>
      <div/>
      <time className="mb-1 text-sm font-normal text-gray-400 dark:text-gray-500">{duration}</time>
      <h3 className="text-lg font-semibold">{jobTitle}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{company}</p>
    </li>
  )
}