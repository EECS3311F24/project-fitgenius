import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styling/App.css'
import App from './App.jsx'

// Create a root element for the React application and render it
// using StrictMode to highlight potential problems in the application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
