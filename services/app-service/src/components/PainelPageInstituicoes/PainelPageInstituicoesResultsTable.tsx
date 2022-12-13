import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowsProp,
  ptBR as dgPtBr,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { PainelPageInstituicoesContext } from './PainelPageInstituicoesContext';
import { useRouter } from 'next/router';

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  {
    field: 'apelido',
    headerName: 'Instituição',
    width: 375,
    sortable: false,
    filterable: false,
  },
  {
    field: 'sigla',
    headerName: 'Sigla',
    width: 150,
    sortable: false,
    filterable: false,
  },
];

const PainelPageInstituicoesResultsTable = () => {
  const { data, instituicoes, isLoading } = useContext(
    PainelPageInstituicoesContext,
  );

  const router = useRouter();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    const { id } = params;

    router.push(`/dashboard/instituicoes/${id}`);
  };

  const pageSize = data?.limit ?? 15;

  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: '300px' }}>
        <DataGrid
          columns={columns}
          loading={isLoading}
          rows={instituicoes}
          pageSize={pageSize}
          onRowClick={handleRowClick}
          rowsPerPageOptions={[pageSize]}
          localeText={dgPtBr.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </>
  );
};

export default PainelPageInstituicoesResultsTable;
