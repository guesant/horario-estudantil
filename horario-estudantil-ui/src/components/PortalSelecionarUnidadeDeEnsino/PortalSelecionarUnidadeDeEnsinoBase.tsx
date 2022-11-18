import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import PortalSelecionarUnidadeDeEnsinoHeader from "./PortalSelecionarUnidadeDeEnsinoHeader";
import PortalSelecionarUnidadeDeEnsinoResults from "./PortalSelecionarUnidadeDeEnsinoResults";
import PortalSelecionarUnidadeDeEnsinoSearchField from "./PortalSelecionarUnidadeDeEnsinoSearchField";

const PortalSelecionarUnidadeDeEnsinoBase = () => {
  return (
    <>
      <Container sx={{ height: "100%" }} maxWidth="sm">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            overflow: "hidden",
            flexDirection: "column",
            py: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <PortalSelecionarUnidadeDeEnsinoHeader />

          <Divider />

          <Box sx={{ my: 2 }}>
            <PortalSelecionarUnidadeDeEnsinoSearchField />
          </Box>

          <Box sx={{ flex: 1, overflow: "auto" }}>
            <PortalSelecionarUnidadeDeEnsinoResults />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PortalSelecionarUnidadeDeEnsinoBase;
