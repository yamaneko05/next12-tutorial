import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import Link from 'next/link'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar component={Container}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next.js 12 チュートリアル
          </Typography>
          <Button component={Link} href="/" color="inherit">
            Home(react-query, react-hook-form)
          </Button>
          <Button component={Link} href="/chart" color="inherit">
            Chart(chart.js)
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
