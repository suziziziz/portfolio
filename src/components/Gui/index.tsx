import { useEffect, useRef, useState } from 'react'
import styles from './gui.module.scss'

export default function Gui( ) {
  const [show, setShow] = useState(false)
  const [canBack, setCanBack] = useState(true)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if ( window.scrollY <= 64 ) {
        setShow(false)
        setCanBack(true)
      } else {
        setShow(true)
      }
    })

    window.addEventListener('resize', handlerResize)
    window.addEventListener('load', handlerResize)
  }, [])

  function handlerResize( ) {
    document.documentElement.style.setProperty('--vw', `${divRef.current.offsetWidth}px`)
    document.documentElement.style.setProperty('--vh', `${divRef.current.offsetHeight}px`)
  }

  function handlerClick( e: any ) {
    if ( !canBack ) {
      e.preventDefault()
    } else {
      setCanBack(false)
    }
  }

  return (
    <div className={styles.gui} ref={divRef}>
      <a
        href="#"
        className={`${styles.backToTop}${!show ? ' ' + styles.hide : ''}`}
        onClick={handlerClick}
      ><span>&lt;</span></a>
    </div>
  )
}