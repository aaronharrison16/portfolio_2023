import styles from './styles.module.css'

export default function Blobs() {
  return (
    <div className={styles.blobOuterContainer}>
      <div className={styles.blobInnerContainer}>
        <div className={styles.greenBlob} />
        <div className={styles.yellowBlob} />
        <div className={styles.redBlob} />
      </div>
    </div>
  )
}
