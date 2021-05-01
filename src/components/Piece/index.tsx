import CSS from 'csstype'
import { useEffect, useRef, useState } from 'react'

import FadeColor from '../FadeColor'
import Interrogation from '../Interrogation'
import Luna from '../Luna'
import Pyramid from '../Pyramid'

import styles from './piece.module.scss'

type PieceProps = {
  id: number | (() => number);
  children: JSX.Element | JSX.Element[];
  notPrevious?: boolean;
  notNext?: boolean;
  luna?: boolean;
  pyramid?: boolean;
  fadeTo?: 'transparent' | 'black';
  style?: CSS.Properties;
  interrogation?: boolean;
}

export default function Piece( props: PieceProps ) {
  const myIdName = 'piece'
  const pieceCurrent = `${myIdName}-${props.id}`
  const piecePrevious = `#${myIdName}-${Number(props.id) - 1}`
  const pieceNext = `#${myIdName}-${Number(props.id) + 1}`

  const divRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  function handleScroll() {
    if (window.scrollY >= divRef.current.offsetTop - 16 && window.scrollY <= divRef.current.offsetTop + 16) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('load', handleScroll)
    window.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <div id={pieceCurrent} className={styles.piece} style={props.style} ref={divRef}>
      { props.notPrevious || (
        <a href={piecePrevious} className={styles.buttonPrevious}>
          <span></span>
        </a>
      ) }

      { props.luna && <Luna /> }
      { props.pyramid && <Pyramid /> }
      { props.fadeTo && <FadeColor fadeTo={props.fadeTo} /> }

      <div className={styles.content} style={show ? {opacity: 1} : {}}>
        { props.interrogation && <Interrogation /> }
        { props.children }
      </div>

      { props.notNext || (
        <a href={pieceNext} className={styles.buttonNext}>
          <span></span>
        </a>
      ) }
    </div>
  )
}
