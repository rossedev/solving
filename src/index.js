import React from 'react'
import { createRoot } from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy'
import App from './App'
import { theme } from './theme'
import './styles/global.css'

const container = document.getElementById('root')
createRoot(container).render(
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>,
)
