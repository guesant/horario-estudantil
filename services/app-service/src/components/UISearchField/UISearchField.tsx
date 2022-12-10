import CloseIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ChangeEvent, useRef } from 'react';

export type IUISearchFieldProps = {
  value: string;

  setValue: (
    newValue: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null,
  ) => void;

  TextFieldProps?: TextFieldProps;
};

const UISearchField = (props: IUISearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>();

  const { value = '', setValue, TextFieldProps } = props;

  const hasValue = value.trim().length > 0;

  const SearchAdornment = (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  );

  const ClearAdornment = (
    <InputAdornment position="end">
      <IconButton
        edge="end"
        disabled={!hasValue}
        onClick={() => {
          setValue('', null);
          inputRef.current?.focus();
        }}
        sx={{ visibility: hasValue ? '' : 'hidden' }}
      >
        <CloseIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <>
      <TextField
        value={value}
        inputRef={inputRef}
        {...TextFieldProps}
        onChange={(e) => setValue(e.target.value, e)}
        InputProps={{
          startAdornment: <>{SearchAdornment}</>,
          endAdornment: <>{ClearAdornment}</>,
        }}
      />
    </>
  );
};

export default UISearchField;
