import { PersistentContextProvider } from 'react-persist-context'
import store from '../functions/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PersistentContextProvider store={store}>
      <Component {...pageProps} />
    </PersistentContextProvider>
  )
}

export default MyApp
