import React from 'react'
import { Box } from '@mui/joy'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import FeaturesSection from './components/FeaturesSection'
import CardSection from './components/CardSection'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Box>
      <Header />
      <Dashboard />
      <FeaturesSection />
      <CardSection />
      <Footer />
    </Box>
  )
}
export default App
