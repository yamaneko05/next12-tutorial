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

export default function Page() {
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button onClick={handleDialogOpen} variant="contained">
            {t('create')}
          </Button>
          {isRefetching && <CircularProgress size={24} />}
        </Box>
        <Box sx={{ mt: 2 }}>
          {createdAlertIsOpen && (
            <Alert severity="success">投稿を作成しました！</Alert>
          )}
          <PostList posts={posts ?? []} />
        </Box>
      </Layout>
      <Dialog open={dialogIsOpen} onClose={handleDialogClose}>
        <DialogTitle>{t('create')}</DialogTitle>
        <DialogContent>
          <CreateForm onSuccess={onPostCreateSuccess} />
        </DialogContent>
      </Dialog>
      {isLoading && (
        <Backdrop open>
          <CircularProgress />
        </Backdrop>
      )}
    </>
  )
}
