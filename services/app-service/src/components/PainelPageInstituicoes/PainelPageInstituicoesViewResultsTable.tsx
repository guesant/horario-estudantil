import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  ptBR as dgPtBr,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: 'apelido', headerName: 'Instituição', width: 375 },
  { field: 'sigla', headerName: 'Sigla', width: 150 },
];

const PainelPageInstituicoesViewResultsTable = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: '300px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          localeText={dgPtBr.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </>
  );
};

export default PainelPageInstituicoesViewResultsTable;
