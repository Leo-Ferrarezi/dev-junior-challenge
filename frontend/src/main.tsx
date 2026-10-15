import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Checkin from './pages/checkin'
{/*import Recepcao from './pages/recepcao'*/}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Checkin />
    {/* ... <Recepcao/> */}
               
  </StrictMode>,
)
