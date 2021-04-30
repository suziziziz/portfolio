import styles from './social.module.scss'

type SocialProps = {
  href: string;
  src: string;
  alt?: string;
}

export default function Social( props: SocialProps ) {
  return (
    <a href={props.href} target='_blank' className={styles.socialLink}>
      <img src={props.src} alt={props.alt} />
    </a>
  )
}