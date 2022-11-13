import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useState } from "react";

const AppHeaderSearch = () => {
  const [value, setValue] = useState("");

  const [theme] = useState(() => createTheme({ palette: { mode: "dark" } }));

  const hasValue = value.trim().length > 0;

  return (
    <>
      <ThemeProvider theme={theme}>
        <OutlinedInput
          size="small"
          margin="none"
          value={value}
          placeholder="Buscar por..."
          onFocus={(e) => e.target.select()}
          onChange={(e) => setValue(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                disabled={!hasValue}
                sx={{ visibility: hasValue ? "" : "hidden" }}
              >
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </ThemeProvider>
    </>
  );
};

export default AppHeaderSearch;
