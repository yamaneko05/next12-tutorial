import { z } from 'zod'
import { createPostSchema } from './schemas'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type CreatePostSchemaType = z.infer<typeof createPostSchema>
