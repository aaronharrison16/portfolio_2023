import styles from './Hamburger.module.css'

interface HamburgerProps {
  checked: boolean
  onCheck: (isChecked: boolean) => void,
}

export default function Hamburger({ onCheck, checked }: HamburgerProps) {
  const handleOnCheck = () => {
    onCheck(!checked)
  }

  return (
    <div>
      <input checked={checked} onChange={handleOnCheck} type="checkbox" className={styles.checkbox} id="checkbox" />
      <label htmlFor="checkbox">
        <svg className={styles.checkboxSvg} width="24" height="20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className={styles.line1}
            id="line1"
            d="M0 10C0 4.47715 4.47715 0 10 0H110C115.523 0 120 4.47715 120 10C120 15.5228 115.523 20 110 20H10C4.47715 20 0 15.5228 0 10Z"
          />
          <path
            className={styles.line2}
            id="line2"
            d="M0 50C0 44.4772 4.47715 40 10 40H110C115.523 40 120 44.4772 120 50C120 55.5228 115.523 60 110 60H10C4.47715 60 0 55.5228 0 50Z"
          />
          <path
            className={styles.line3}
            id="line3"
            d="M0 50C0 44.4772 4.47715 40 10 40H110C115.523 40 120 44.4772 120 50C120 55.5228 115.523 60 110 60H10C4.47715 60 0 55.5228 0 50Z"
          />
          <path
            className={styles.line4}
            id="line4"
            d="M0 90C0 84.4772 4.47715 80 10 80H110C115.523 80 120 84.4772 120 90C120 95.5228 115.523 100 110 100H10C4.47715 100 0 95.5228 0 90Z"
          />
        </svg>
      </label>

      {checked}
    </div>
  )
}