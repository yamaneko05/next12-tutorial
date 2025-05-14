import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material'
import Field from './Field'

const schema = z.object({
  title: z.string().max(3),
  body: z.string(),
})

export default function CreateForm() {
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
