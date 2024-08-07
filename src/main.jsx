import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import '@radix-ui/themes/styles.css';
import router from './web/router.jsx'
import { Theme } from '@radix-ui/themes'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "@fontsource/inter";
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID} >
    <React.StrictMode>
      <Theme >
        <RouterProvider router={router} />
      </Theme>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
