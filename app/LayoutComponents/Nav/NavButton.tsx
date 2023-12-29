import styles from './styles.module.css'

interface NavButtonProps {
  title: string
}

const NavButton = ({title}: NavButtonProps) => {
  //not sure if this should be a link or button or what. Problem for a different day
  return (
    <div className={styles.navButton}>
      {title}
    </div>
  )
}

export default NavButton