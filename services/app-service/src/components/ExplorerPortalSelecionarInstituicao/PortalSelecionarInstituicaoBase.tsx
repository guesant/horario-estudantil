import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import PortalSelecionarInstituicaoHeader from "./PortalSelecionarInstituicaoHeader";
import PortalSelecionarInstituicaoResults from "./PortalSelecionarInstituicaoResults";
import PortalSelecionarInstituicaoSearchField from "./PortalSelecionarInstituicaoSearchField";

const PortalSelecionarInstituicaoBase = () => {
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
          <PortalSelecionarInstituicaoHeader />

          <Divider />

          <Box sx={{ my: 2 }}>
            <PortalSelecionarInstituicaoSearchField />
          </Box>

          <Box sx={{ flex: 1, overflow: "auto" }}>
            <PortalSelecionarInstituicaoResults />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PortalSelecionarInstituicaoBase;
