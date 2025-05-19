import { Box, Typography } from '@mui/material'
import Layout from '../components/Layout'
import Sortable from '../components/Sortable'

export default function Page() {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        並び替え
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Sortable />
      </Box>
    </Layout>
  )
}
