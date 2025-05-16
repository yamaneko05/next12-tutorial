import { QueryClient } from 'react-query'

export const queryClient = new QueryClient()

export function invalidatePosts() {
  queryClient.invalidateQueries({ queryKey: ['postList'] })
}
