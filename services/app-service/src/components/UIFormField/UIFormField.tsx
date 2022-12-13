import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type IFormFieldProps = {
  name: string;

  label: string;

  aboutText?: string;
};
export const UIFormField = (props: IFormFieldProps) => {
  const { name, label, aboutText } = props;

  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const isDisabled = Boolean(isSubmitting);

  return (
    <>
      <Box>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => {
            const { name, onChange, onBlur, value, ref } = field;

            const { error } = fieldState;

            const errorMessage = error?.message;

            const hasError = errorMessage !== undefined;

            return (
              <TextField
                fullWidth
                name={name}
                label={label}
                onBlur={onBlur}
                error={hasError}
                onChange={onChange}
                value={value ?? ''}
                color={'secondary'}
                disabled={isDisabled}
                InputProps={{ inputRef: ref }}
                helperText={hasError ? errorMessage.toString() : aboutText}
              />
            );
          }}
        />
      </Box>
    </>
  );
};
