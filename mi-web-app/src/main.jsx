import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/globals.css";

import App from './App.jsx'
import { CursorProvider } from "./context/CursorContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CursorProvider>
   <App />
   </CursorProvider>
   </StrictMode>,
)

