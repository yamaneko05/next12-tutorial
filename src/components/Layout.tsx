import { Box, Container } from '@mui/material'
import Header from './Header'

export default function Layout({ children }: { children }) {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ pt: 2, pb: 8 }}>{children}</Box>
      </Container>
    </>
  )
}
