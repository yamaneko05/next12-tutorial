import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Box, Typography } from '@mui/material'
import Layout from '../components/Layout'
import LineChart from '../components/LineChart'
import DoughnutChart from '../components/DoughnutChart'

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

  return (
    <>
      <Layout>
        <Typography variant="h3" component="h1">
          {t('chart')}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Box>
            <Typography variant="h5" component="h2">
              emaxis slim 米国株式(s&p500) 基準価格
            </Typography>
            <Box maxWidth="md" sx={{ mt: 2 }}>
              <LineChart />
            </Box>
          </Box>
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" component="h2">
              S&P500 構成銘柄
            </Typography>
            <Box maxWidth="sm" sx={{ mt: 2 }}>
              <DoughnutChart />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  )
}
