import { appWithTranslation } from 'next-i18next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../utils/queryClient'
import theme from '../theme'

function MyApp(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <props.Component {...props.pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
