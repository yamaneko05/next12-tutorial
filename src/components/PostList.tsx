import { useQuery } from 'react-query'
import { httpClient } from '../utils/httpClient'
import { Post } from '../types'
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

async function getPosts() {
  const res = await httpClient.get<Post[]>('/api/posts')

  return res.data
}

export default function PostList() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ['postList'],
    queryFn: getPosts,
  })

  if (isLoading)
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    )
  if (error) return 'error!'

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>ボディ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
