import { CreatePostSchemaType, Post } from './types'
import { httpClient } from './utils/httpClient'

export async function getPosts() {
  const res = await httpClient.get<Post[]>('/api/posts')

  return res.data
}

export async function createPost(formData: CreatePostSchemaType) {
  await httpClient.post('/api/posts', formData)
}
