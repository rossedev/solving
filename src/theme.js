const { extendTheme } = require('@mui/joy/styles')

export const theme = extendTheme({
  fontFamily: {
    body: 'Poppins, sans-serif',
    code: 'Poppins, sans-serif',
    display: 'Poppins, sans-serif',
    fallback: 'Poppins, sans-serif',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#7F56D9',
          solidHoverBg: '#7244d5',
          outlinedBorder: '#7244d5',
          outlinedColor: '#7F56D9',
        },
        secondary: {
          solidBg: '#FFFFFF',
          solidBorder: '#D0D5DD',
          solidHoverBg: '#f8f5fd',
        },
      },
    },
  },
})

export const colorSchemes = {
  primary: '#101828',
  secondary: '#7F56D9',
  opacity: '#475467',
  background: '#d4d6df61',
  white: '#FFFFFF',
}
