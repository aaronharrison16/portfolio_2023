import styles from './styles.module.css'

interface NavButtonProps {
  title: string,
  sectionId: string,
  onClick: (sectionId: string) => void,
  active?: boolean
}

export default function NavButton({title, onClick, sectionId, active}: NavButtonProps) {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={`${styles.navButton} ${active ? styles.navButtonActive : ''}}`}
    >
      {title}
    </button>
  )
}
