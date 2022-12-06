import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExplorerSelectInstituicaoResults from "../ExplorerSelectInstituicaoResults/ExplorerSelectInstituicaoResults";
import ExplorerSelectInstituicaoSearchField
  from "../ExplorerSelectInstituicaoSearchField/ExplorerSelectInstituicaoSearchField";

const ExplorerSelectInstituicaoBase = () => {
  return (
    <>
      <Container sx={{height: "100%"}} maxWidth="sm">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            overflow: "hidden",
            flexDirection: "column",
          }}
        >
          <Box sx={{my: {xs: 2, sm: 4}}}>
            <ExplorerSelectInstituicaoSearchField/>
          </Box>

          <Box sx={{flex: 1, overflow: "auto"}}>
            <ExplorerSelectInstituicaoResults/>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ExplorerSelectInstituicaoBase;
