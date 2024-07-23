import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import '@radix-ui/themes/styles.css';
import router from './web/router.jsx'
import { Theme } from '@radix-ui/themes'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='798016195785-7oe354odp03nr7726657fgtcfnjbbuku.apps.googleusercontent.com' >
    <React.StrictMode>
      <Theme >
        <RouterProvider router={router} />
      </Theme>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
