import styles from './styles.module.css'

export interface NavButtonProps {
  title: string,
  sectionId: string,
  onClick: (sectionId: string) => void,
  active?: boolean
}

export default function NavButton({title, onClick, sectionId, active}: NavButtonProps) {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={`${styles.navButton} ${active && styles.active}`}
    >
      <p>

        {title}
      </p>
    </button>
  )
}
