import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import AppLoading from "../UIExplorerLoading/AppLoading";

const ExplorerPortalSelecionarInstituicao = dynamic(
  () => import("../ExplorerSelectInstituicao/ExplorerSelectInstituicao"),
  {loading: () => <AppLoading/>}
);

type IExplorerSelectInstituicaoDialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const ExplorerSelectInstituicaoDialog = (props: IExplorerSelectInstituicaoDialogProps) => {
  const {isOpen, setIsOpen} = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => setIsOpen(false)

  return <>
    <Dialog
      fullWidth
      maxWidth="md"
      open={isOpen}
      scroll="paper"
      onClose={handleClose}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: "0.75rem"
        }
      }}
    >
      <AppBar color={"success" as any} sx={{position: 'relative'}}>
        <Toolbar>

          <Typography sx={{flex: 1}} variant="h6" component="div">
            Selecionar Instituição
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{height: "100vh", maxHeight: "100%"}}>
        <ExplorerPortalSelecionarInstituicao/>
      </Box>
    </Dialog>
  </>
}