import styles from './Button.module.css'

interface ButtonProps {
  children: string,
  OnClick: () => void
}

export default function Button({children, OnClick}: ButtonProps) 
{
  return (
    <button onClick={OnClick} className={styles.button}>
      {children}
    </button>
  )
}
