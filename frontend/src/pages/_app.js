import '@/styles/globals.css'
import {store} from '../components/redux/store'
import { Provider } from "react-redux";


export default function App({ Component, pageProps }) {
  return (    
  
  <Provider store={store}>
  
    <Component {...pageProps} />
  
  </Provider>
  )
}
