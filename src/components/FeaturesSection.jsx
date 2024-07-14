import React from 'react'
import { Box, Typography } from '@mui/joy'
import { colorSchemes } from '../theme'

const FeaturesSection = () => {
  return (
    <Box
      id="features"
      textAlign="center"
      className="container-feature"
      py={10}
      px={{ xs: '5rem' }}
    >
      <Typography
        level="title-sm"
        textColor={colorSchemes.secondary}
        fontWeight={600}
        mb={1}
      >
        Features
      </Typography>
      <Typography
        level="h2"
        textColor={colorSchemes.primary}
        fontWeight={600}
        mb={2}
      >
        Unlock yourself with Solving AI
      </Typography>
      <Typography
        level="body-sm"
        textColor={colorSchemes.opacity}
        lineHeight="text-xl"
      >
        Dive into our suite of AI-powered applications and discover how they can
        <br />
        transform your daily operations.
      </Typography>
    </Box>
  )
}

export default FeaturesSection
