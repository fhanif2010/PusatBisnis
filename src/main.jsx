import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Routers from './routers/routers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routers />
    </Router>
  </StrictMode>,
)
