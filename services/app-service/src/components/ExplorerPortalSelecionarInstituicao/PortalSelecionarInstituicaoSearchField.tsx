import { useContext } from "react";
import UISearchField from "../UISearchField/UISearchField";
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
      <UISearchField
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
