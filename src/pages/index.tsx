import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import PostList from '../components/PostList'
import Layout from '../components/Layout'
import { useState } from 'react'
import CreateForm from '../components/CreateForm'

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

  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleDialogOpen = () => {
    setDialogIsOpen(true)
  }

  const handleDialogClose = () => {
    setDialogIsOpen(false)
  }

  return (
    <>
      <Layout>
        <Typography variant="h2" component="h1">
          {t('hello')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Button onClick={handleDialogOpen} variant="contained">
            {t('create')}
          </Button>
        </Box>
        <PostList />
      </Layout>
      <Dialog open={dialogIsOpen} onClose={handleDialogClose}>
        <DialogTitle>{t('create')}</DialogTitle>
        <DialogContent>
          <CreateForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
