import { parse } from 'csv-parse/sync'
import { CreatePostSchemaType, Post } from './types'
import { httpClient } from './utils/httpClient'

export async function getPosts() {
  const res = await httpClient.get<Post[]>('/api/posts')

  return res.data
}

export async function createPost(formData: CreatePostSchemaType) {
  await httpClient.post('/api/posts', formData)
}

export async function getEmaxisSlimSp500Data() {
  const res = await httpClient.get('/emaxis_slim_sp500.csv')

  const data = parse(res.data, {
    from: 3,
    columns: ['date', 'price', null, null, 'totalAssets'],
  })

  const filtered = data.filter((_, i) => i % 7 === 0)

  return filtered
}

export async function getSp500Constituents() {
  const res = await httpClient.get('/sp500_constituents.csv')

  const data = parse(res.data, {
    columns: ['no', 'brand', 'percent', 'color'],
  })

  return data
}
