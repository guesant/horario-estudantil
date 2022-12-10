import { useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type IFormFieldProps = {
  field: string;

  label: string;

  aboutText?: string;
};
export const FormField = (props: IFormFieldProps) => {
  const { field, label, aboutText } = props;

  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  const error = errors[field];

  const errorMessage = error?.message;

  const hasError = errorMessage !== undefined;

  const isDisabled = Boolean(isSubmitting);

  return (
    <>
      <Box>
        <TextField
          fullWidth
          label={label}
          error={hasError}
          color={'secondary'}
          disabled={isDisabled}
          InputProps={{ ...register(field) }}
          helperText={hasError ? errorMessage.toString() : aboutText}
        />
      </Box>
    </>
  );
};
