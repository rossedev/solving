import React from 'react'
import { Box, Link, Stack } from '@mui/joy'
import { scrollToSection } from '../utils/scrollToSection'
import logo from '../images/logo.png'
import { colorSchemes } from '../theme'

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="shadow-box"
      height={55}
      px={{
        xs: '1rem',
        sm: '5rem',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{
          xs: 1,
          sm: 6,
        }}
      >
        <img src={logo} alt="Logo" width={130} />
        <Link
          level="body-md"
          textColor={colorSchemes.primary}
          fontWeight={600}
          underline="none"
          onClick={() => scrollToSection('features')}
        >
          Features
        </Link>

        <Link
          level="body-md"
          textColor={colorSchemes.primary}
          fontWeight={600}
          underline="none"
          onClick={() => scrollToSection('footer')}
        >
          FAQ
        </Link>
      </Stack>

      <Box>
        <Link
          level="body-md"
          textColor={colorSchemes.secondary}
          fontWeight={600}
          underline="none"
        >
          Sign up
        </Link>
      </Box>
    </Stack>
  )
}

export default Header
