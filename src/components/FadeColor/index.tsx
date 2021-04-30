import styles from './fadeColor.module.scss'

export default function FadeColor( props: { fadeTo?: 'transparent' | 'black'; } ) {
  return (
    <div className={
      props.fadeTo === 'transparent' ? (
        styles.fadeToTransparent
      ) : props.fadeTo === 'black' && (
        styles.fadeToBlack
      )
    }></div>
  )
}