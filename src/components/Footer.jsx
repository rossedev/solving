import React from 'react'
import {
  Box,
  Chip,
  Divider,
  Grid,
  Sheet,
  Stack,
  styled,
  Typography,
} from '@mui/joy'
import logo from '../images/logo.png'
import linkData from '../data/listFooter.json'
import { colorSchemes } from '../theme'

const Item = styled(Sheet)(() => ({
  textAlign: 'start',
  background: 'transparent',
  fontWeight: 600,
}))

export const Footer = () => {
  return (
    <Box
      mx={{
        xs: 4,
        sm: 10,
      }}
      mt={15}
      mb={4}
    >
      <Grid id="footer" container sx={{ flexGrow: 1 }} mb={8}>
        {linkData.map((list, index) => (
          <Grid item xs={6} sm={4} md={2} mr={{ md: 5 }} mb={4} key={index}>
            <Item>
              <Typography mb={3}>{list.title}</Typography>

              <Grid container direction="column" spacing={2}>
                {list.items.map((item, itemIndex) => (
                  <Grid item key={itemIndex}>
                    <Typography
                      textColor={colorSchemes.secondary}
                      className="pointer"
                    >
                      {item.name}{' '}
                      {item?.isNew ? (
                        <Chip size="sm" variant="outlined" color="primary">
                          New
                        </Chip>
                      ) : (
                        ''
                      )}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={3}
      >
        <img src={logo} alt="Logo" width={130} />
        <Typography level="body-xs" textColor="#667085" lineHeight="text-xl">
          © 2024 Solving.ai All rights reserved.
        </Typography>
      </Stack>
    </Box>
  )
}
