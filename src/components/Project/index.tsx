import styles from './project.module.scss'

type ProjectProps = {
  href: string;
  src: string;
  alt?: string;
}

export default function Project( props: ProjectProps ) {
  return (
    <a href={props.href} target='_blank' className={styles.project}>
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.alt}</figcaption>
      </figure>
    </a>
  )
}