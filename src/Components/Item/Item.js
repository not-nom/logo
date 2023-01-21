import { useEffect, useRef, useState } from 'react'
import style from './Item.module.css'

export default function Item({props , fnSt}) {
    const textWrap = useRef()
    const textInner = useRef()
    const [state, setState] = useState(false);
    useEffect(() => {
        const height = textInner.current.getBoundingClientRect().height;
        console.log(state)
        if(state){
        textWrap.current.style.height = `${height}px`
        }
        else{
            textWrap.current.style.height = '60px'
        }
    },[state])
    return (
    <div className={style.item} onClick={() => fnSt(props.photo)} onMouseOver={(e) =>{setState(true) ; console.log('O yeah')}} onMouseLeave={(e) => {setState(false); console.log('Oh no')}}>
        <img src={props.photo} className={style.photo}/>
        <h1 className={style.Name}>{props.autoName}</h1>
        <div className={style.InfoBlock} ref={textWrap}><p ref={textInner} className={style.Info}>{props.Info}</p></div>
    </div>
  )
}
