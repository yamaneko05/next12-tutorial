import { appWithTranslation } from 'next-i18next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider, QueryClient } from 'react-query'
import theme from '../theme'

const queryClient = new QueryClient()

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
