import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(1).max(32),
  body: z.string().min(1).max(128),
})
