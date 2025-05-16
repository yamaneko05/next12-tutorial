import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import PostList from '../components/PostTable'
import Layout from '../components/Layout'
import { useState } from 'react'
import CreateForm from '../components/CreateForm'
import { useQuery } from 'react-query'
import { getPosts } from '../api'

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

  const [createdAlertIsOpen, setCreatedAlertIsOpen] = useState(false)

  const handleCreatedAlertOpen = () => {
    setCreatedAlertIsOpen(true)
  }

  const onPostCreateSuccess = () => {
    handleDialogClose()
    handleCreatedAlertOpen()
  }

  const {
    isLoading, // 初回読み込みはisLoading
    isRefetching, // 新規作成の成功後や復帰時のrefetch
    error,
    data: posts,
  } = useQuery({
    queryKey: ['postList'],
    queryFn: getPosts,
  })

  if (error) return 'error!'

  return (
    <>
      <Layout>
        <Typography variant="h2" component="h1">
          {t('chart')}
        </Typography>
        <Box sx={{ mt: 2 }}></Box>
      </Layout>
    </>
  )
}
