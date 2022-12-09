import { AppProvider } from '../context/AppContext'
import ReduxActions from '../components/ReduxActions';
import '../styles/globals.css'

//Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppProvider>
        <ReduxActions>
          <Component {...pageProps} />
        </ReduxActions>
      </AppProvider>
    </Provider>
  )
}

export default MyApp
