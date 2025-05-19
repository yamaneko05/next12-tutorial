import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export function invalidatePosts() {
  queryClient.invalidateQueries({ queryKey: ['postList'] })
}
