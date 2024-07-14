import React from 'react'
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/joy'
import { colorSchemes } from '../theme'

const CardSection = () => {
  return (
    <Box mx={{ xs: '0', sm: '5rem' }} my={{ xs: '0', sm: 10 }}>
      <Card variant="soft" size="lg" className="cardNoRadius">
        <CardContent>
          <Stack
            direction={{
              xs: 'column',
              sm: 'column',
              md: 'row',
            }}
            justifyContent="space-between"
            alignItems="center"
            m={3}
          >
            <Box>
              <Typography
                level="h4"
                fontSize={{
                  xs: 'large',
                  sm: 'x-large',
                  lg: 'x-large',
                }}
                textColor={colorSchemes.primary}
                fontWeight={600}
                mb={1}
              >
                The App is free to use!
              </Typography>
              <Typography
                level="body-sm"
                textColor={colorSchemes.opacity}
                lineHeight="text-xl"
              >
                You have $5 USD available to spend on AI.
              </Typography>
            </Box>
            <Box mt={{ xs: '2rem', sm: '2rem', md: 0 }}>
              <Button color="secondary" className="whiteButton" variant="solid">
                Learn more
              </Button>
              <Button
                variant="solid"
                color="primary"
                sx={{
                  marginLeft: '0.5rem',
                }}
              >
                Get started
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CardSection
