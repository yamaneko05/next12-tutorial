import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import Link from 'next/link'
import { navLinks } from '../constants'
import { useTranslation } from 'next-i18next'

export default function Header() {
  const { t } = useTranslation()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar component={Container}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              {t('nextjs12tutorial')}
            </Link>
          </Typography>
          {navLinks.map((navLink) => (
            <Button
              key={navLink.href}
              component={Link}
              href={navLink.href}
              color="inherit"
            >
              {navLink.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
