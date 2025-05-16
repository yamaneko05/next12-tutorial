import { Box, Container } from '@mui/material'

export default function Layout({ children }: { children }) {
  return (
    <Container>
      <Box sx={{ pt: 2, pb: 8 }}>{children}</Box>
    </Container>
  )
}
