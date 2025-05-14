import { FormControl, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

export default function Field({
  control,
  name,
  label,
}: {
  control: Control
  name: string
  label: string
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl fullWidth>
          <TextField
            label={label}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            {...field}
          />
        </FormControl>
      )}
    />
  )
}
