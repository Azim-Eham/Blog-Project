import {Provider} from 'react-redux'
import store from './redux/store.js'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={false} />
      <App />
  </Provider>,
)
