import { useContext } from 'react';
import UISearchField from '../UISearchField/UISearchField';
import { ExplorerSelectInstituicaoContext } from '../ExplorerSelectInstituicao/ExplorerSelectInstituicaoContext';

const usePortalSelecionarInstituicaoSearchFieldValues = () => {
  const { searchText, setSearchText } = useContext(
    ExplorerSelectInstituicaoContext,
  );

  return { searchText, setSearchText };
};

const ExplorerSelectInstituicaoSearchField = () => {
  const { searchText, setSearchText } =
    usePortalSelecionarInstituicaoSearchFieldValues();

  return (
    <>
      <UISearchField
        value={searchText}
        setValue={setSearchText}
        TextFieldProps={{
          size: 'small',
          fullWidth: true,
          color: 'success',
          InputProps: {
            autoFocus: true,
            autoComplete: 'off',
          },
          placeholder: 'Refinar os resultados…',
        }}
      />
    </>
  );
};

export default ExplorerSelectInstituicaoSearchField;
