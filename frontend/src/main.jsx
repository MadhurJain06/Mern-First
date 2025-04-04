import { StrictMode } from 'react'
import App from './App.jsx'
import { Provider } from "./components/ui/provider.jsx"
import { createRoot } from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
         <Provider>
           <App />
          </Provider>
      </BrowserRouter>
  </StrictMode>,
)
