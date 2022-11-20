import { useContext } from "react";
import AppSearchField from "../AppSearchField/AppSearchField";
import { PortalSelecionarInstituicaoContext } from "./PortalSelecionarInstituicaoContext";

const usePortalSelecionarInstituicaoSearchFieldValues = () => {
  const { searchText, setSearchText } = useContext(
    PortalSelecionarInstituicaoContext
  );

  return { searchText, setSearchText };
};

const PortalSelecionarInstituicaoSearchField = () => {
  const { searchText, setSearchText } =
    usePortalSelecionarInstituicaoSearchFieldValues();

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

export default PortalSelecionarInstituicaoSearchField;
