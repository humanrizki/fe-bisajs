import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import '@radix-ui/themes/styles.css';
import router from './web/router.jsx'
import { Theme } from '@radix-ui/themes'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme >
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
)
