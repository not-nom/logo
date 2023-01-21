import styles from './ModalWindow.module.css'

export default function ModalWindow({pURL ,fnSt}){
  return (
    <div className={styles.bag} onClick={(e) => {fnSt(false)}}>
        <img className={styles.photo} onClick={(e) => {e.stopPropagation()}} src={pURL} />
    </div>
  )
}
