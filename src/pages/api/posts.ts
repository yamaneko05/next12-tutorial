import { Post } from '../../types'
import { httpClient } from '../../utils/httpClient'

async function getPosts() {
  const res = await httpClient.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )

  return res.data
}

export default async function handler(req, res) {
  const posts = await getPosts()

  // await new Promise((resolve) => setTimeout(resolve, 2500))

  res.status(200).json(posts)
}
