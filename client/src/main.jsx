import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "antd/dist/reset.css";
import './index.css'
import AdminSettings from './pages/Admin/AdminSettings.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <AdminSettings />
  </StrictMode>
</Provider>
)
