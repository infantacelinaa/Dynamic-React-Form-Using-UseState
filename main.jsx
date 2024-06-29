import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserCard } from './UserCard.jsx'
import { QrCode } from './QrCode.jsx'
import { Regfrm } from '../formSamples/Regfrm.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Regfrm/>
  </React.StrictMode>
)
