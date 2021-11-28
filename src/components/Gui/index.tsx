import { useEffect, useRef, useState } from 'react'
import styles from './gui.module.scss'

export default function Gui( ) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('resize', handlerResize)
    window.addEventListener('load', handlerResize)
  }, [])

  function handlerResize( ) {
    document.documentElement.style.setProperty('--vw', `${divRef.current.offsetWidth}px`)
    document.documentElement.style.setProperty('--vh', `${divRef.current.offsetHeight}px`)
    window.open(window.location.hash, '_self')
  }

  return (
    <div className={styles.gui} ref={divRef}>
      <div className={styles.navigator}>
        <div className={styles.dropUp}><i className="material-icons">arrow_drop_up</i>
          <div className={styles.dropUpContent} tabIndex={0}>
            <a href="#piece-6"><i className="material-icons">videogame_asset</i><span>PROJETOS GAMEDEV</span></a>
            <a href="#piece-4"><i className="material-icons">public</i><span>PROJETOS WEBDEV</span></a>
            <a href="#piece-1"><i className="material-icons">face</i><span>SOBRE MIM</span></a>
            <a href="#piece-0"><i className="material-icons">home</i><span>INÍCIO</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}