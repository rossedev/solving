import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/joy'
import { colorSchemes } from '../theme'
import backImage from '../images/background.png'
import cardsImage from '../images/cards.png'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <Box className="container" sx={{ backgroundImage: `url(${backImage})` }}>
      <Stack
        bgcolor={colorSchemes.background}
        textAlign="center"
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          textAlign={{ xs: 'center', sm: 'start' }}
          mx={{
            xs: '1rem',
            sm: 0,
          }}
          my={{
            xs: '2rem',
            sm: 0,
          }}
          ml={{
            xs: '1rem',
            sm: '5rem',
          }}
        >
          <Typography
            level="h1"
            textColor={colorSchemes.primary}
            variant="plain"
            fontSize={{
              xs: 'xx-large',
              sm: 'xx-large',
              lg: 'xxx-large',
            }}
            width={{ xs: '100%', sm: '100%', lg: '65%' }}
          >
            What can AI do for you?
          </Typography>
          <Typography
            level="body-sm"
            textColor={colorSchemes.opacity}
            width={{ xs: '100%', sm: '100%', lg: '70%' }}
            mt={3}
            mb={6}
          >
            At Solving.AI, we harness the transformative power of generative
            artificial intelligence to pioneer a new frontier of software
            applications.
          </Typography>
          <Button sx={{ background: colorSchemes.secondary }} variant="solid">
            Learn more about Solving AI
          </Button>
        </Box>
        <Box>
          <img src={cardsImage} width="80%" alt="Cards" />
        </Box>
      </Stack>
    </Box>
  )
}

export default Dashboard
