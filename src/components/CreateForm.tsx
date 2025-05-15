import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import Field from './Field'
import { useMutation } from 'react-query'
import { createPostSchema } from '../schemas'
import { createPost } from '../api'

export default function CreateForm() {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(createPostSchema),
  })

  const mutation = useMutation({
    mutationFn: createPost,
  })

  const handleFormSubmit = handleSubmit(async (data) => {
    mutation.mutate(data)
    reset()
  })

  return (
    <form onSubmit={handleFormSubmit}>
      <Box sx={{ width: 360, pt: 1 }}>
        <Box>
          <Field control={control} name="title" label="タイトル" />
        </Box>
        <Box sx={{ mt: 6 }}>
          <Field control={control} name="body" label="ボディ" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 4 }}>
          <Button type="submit" variant="contained" color="success">
            作成
          </Button>
        </Box>
      </Box>
    </form>
  )
}
