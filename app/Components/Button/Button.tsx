import styles from './Button.module.css'

interface ButtonProps {
  children: string,
}

export default function Button({children}: ButtonProps) 
{
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
