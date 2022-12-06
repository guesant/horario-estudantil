import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {ChangeEvent, useRef} from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

type IUIHeaderSearchFieldProps = {
  value: string;
  setValue: (value: string, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => void;
}

const UIHeaderSearchField = (props: IUIHeaderSearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>();

  const {value, setValue} = props

  const hasValue = value.trim().length > 0;

  const ClearAdornment = (
    <InputAdornment style={{color: "white"}} position="end">
      <IconButton
        color={"inherit"}
        disabled={!hasValue}
        onClick={() => {
          setValue("", null);
          inputRef.current?.focus();
        }}
        sx={{visibility: hasValue ? "" : "hidden"}}
      >
        <CloseIcon/>
      </IconButton>
    </InputAdornment>
  );

  return <>
    <Search>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      <StyledInputBase
        value={value}
        inputRef={inputRef}
        placeholder="Buscar…"
        inputProps={{'aria-label': 'search'}}
        endAdornment={<>{ClearAdornment}</>}
        onChange={(e) => setValue(e.target.value, e)}
      />
    </Search>
  </>
}

export default UIHeaderSearchField;