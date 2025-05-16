import { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../types'
import { httpClient } from '../../utils/httpClient'
import { createPostSchema } from '../../schemas'

async function getPosts() {
  const res = await httpClient.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )

  return res.data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const posts = await getPosts()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    res.status(200).json(posts)
  } else if (req.method === 'POST') {
    const { success, data, error } = createPostSchema.safeParse(req.body)

    if (!success) {
      res.status(400).json({ error: error.errors })
    }

    console.log(data)

    res.status(200).end()
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
