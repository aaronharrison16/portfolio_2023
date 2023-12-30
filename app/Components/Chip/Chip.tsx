import styles from './Chip.module.css'

interface ChipProps {
  children: string
}

export default function Chip({ children }: ChipProps) {
  return (
    <div className={styles.Chip}>
      <p className='text-sm'>
        {children}
      </p>
    </div>
  )
}