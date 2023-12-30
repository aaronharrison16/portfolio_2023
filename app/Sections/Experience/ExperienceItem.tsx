import { Chip } from "@/app/Components";
import { ExperienceItemProps } from "./Experience";
import styles from './styles.module.css'

export default function ExperienceItem({company, jobTitle, duration, skills, description}: ExperienceItemProps) {
  return (
    <li className={styles.experienceListItem}>
      <div/>
      <time className="mb-1 text-sm font-normal">{duration}</time>
      <h3 className="text-lg font-semibold">{jobTitle}</h3>
      <p className="text-base font-normal">{company}</p>
      <span className="flex gap-2 py-2">
        {skills?.map((skill, i) => (
          <Chip key={i}>
            {skill}
          </Chip>
        ))}
      </span>
    </li>
  )
}