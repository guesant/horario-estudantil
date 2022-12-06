import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useState } from "react";
import UISearchField from "../UISearchField/UISearchField";

const AppHeaderSearch = () => {
  const [value, setValue] = useState("");
  const [theme] = useState(() => createTheme({ palette: { mode: "dark" } }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <UISearchField
          value={value}
          setValue={setValue}
          TextFieldProps={{
            size: "small",
            margin: "none",
            placeholder: "Buscar em todo app...",
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default AppHeaderSearch;
