import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ChangeEvent, useRef } from "react";

export type IAppSearchFieldProps = {
  value: string;
  setValue: (
    newValue: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null
  ) => void;

  TextFieldProps?: TextFieldProps;
};

const AppSearchField = (props: IAppSearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const { value = "", setValue, TextFieldProps } = props;

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
          setValue("", null);
          inputRef.current?.focus();
        }}
        sx={{ visibility: hasValue ? "" : "hidden" }}
      >
        <CloseIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <>
      <TextField
        inputRef={inputRef}
        {...TextFieldProps}
        value={value}
        onFocus={(e) => e.target.select()}
        onChange={(e) => setValue(e.target.value, e)}
        InputProps={{
          startAdornment: <>{SearchAdornment}</>,
          endAdornment: <>{ClearAdornment}</>,
        }}
      />
    </>
  );
};

export default AppSearchField;
