import { useEffect, useRef, useState, MouseEvent } from 'react'
import styles from './gui.module.scss'

export default function Gui( ) {
  const [hover, setHover] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('resize', handlerResize)
    window.addEventListener('load', handlerResize)
  }, [])

  function handlerResize( ) {
    document.documentElement.style.setProperty('--vw', `${divRef.current.offsetWidth}px`)
    document.documentElement.style.setProperty('--vh', `${divRef.current.offsetHeight}px`)
  }

  function handlerHover( state: boolean ) {
    setHover(state)
  }

  return (
    <div className={styles.gui} ref={divRef}>
      <div className={styles.navigator}
        onMouseOver={() => handlerHover(true)}
        onMouseOut={() =>handlerHover(false)}
      >
        <a href="#piece-6"><div><i className="material-icons">videogame_asset</i></div></a>
        <a href="#piece-4"><div><i className="material-icons">public</i></div></a>
        <a href="#piece-1"><div><i className="material-icons">face</i></div></a>
        <a href="#piece-0"><div><i className="material-icons">
          { hover ? "home" : "arrow_drop_up" }
        </i></div></a>
      </div>
    </div>
  )
}