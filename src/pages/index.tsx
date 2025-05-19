import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { navLinks } from '../constants'
import Link from 'next/link'

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale)

  return {
    props: {
      ...translations,
    },
  }
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Typography variant="h3" component="h1">
        {t('hello')}
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {navLinks.map((navLink) => (
          <Grid key={navLink.title} size={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {navLink.title}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2">{navLink.description}</Typography>
                  <List dense>
                    {navLink.dependencies.map((dependency) => (
                      <ListItem key={dependency}>
                        <ListItemText primary={dependency} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
              <CardActions>
                <Button component={Link} href={navLink.href}>
                  {navLink.title}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
