import { useContext } from "react";
import AppSearchField from "../AppSearchField/AppSearchField";
import { PortalSelecionarUnidadeDeEnsinoContext } from "./PortalSelecionarUnidadeDeEnsinoContext";

const usePortalSelecionarUnidadeDeEnsinoSearchFieldValues = () => {
  const { searchText, setSearchText } = useContext(
    PortalSelecionarUnidadeDeEnsinoContext
  );

  return { searchText, setSearchText };
};

const PortalSelecionarUnidadeDeEnsinoSearchField = () => {
  const { searchText, setSearchText } =
    usePortalSelecionarUnidadeDeEnsinoSearchFieldValues();

  return (
    <>
      <AppSearchField
        value={searchText}
        setValue={setSearchText}
        TextFieldProps={{
          size: "small",
          autoFocus: true,
          fullWidth: true,
          color: "success",
          placeholder: "Refinar Resultados",
        }}
      />
    </>
  );
};

export default PortalSelecionarUnidadeDeEnsinoSearchField;
