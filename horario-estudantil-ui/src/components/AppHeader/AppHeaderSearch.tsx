import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useState } from "react";
import AppSearchField from "../AppSearchField/AppSearchField";

const AppHeaderSearch = () => {
  const [value, setValue] = useState("");
  const [theme] = useState(() => createTheme({ palette: { mode: "dark" } }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppSearchField
          value={value}
          setValue={setValue}
          TextFieldProps={{
            size: "small",
            margin: "none",
            placeholder: "Busca Global",
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default AppHeaderSearch;
