import Gui from '../components/Gui'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Gui />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
