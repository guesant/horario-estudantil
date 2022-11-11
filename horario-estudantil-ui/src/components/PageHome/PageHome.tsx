import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Link from "next/link";
import { buildPageTitle } from "../../helpers/buildPageTitle";
import LayoutBase from "../LayoutBase/LayoutBase";
import { HOME_LAYOUT_ACTIONS } from "./HOME_LAYOUT_ACTIONS";

export default function Home() {
  return (
    <>
      <Head>
        <title>{buildPageTitle("Início")}</title>
      </Head>

      <LayoutBase
        navigationActions={HOME_LAYOUT_ACTIONS}
        SubHeaderProps={{
          children: (
            <>
              <Typography variant="h6">
                Selecione uma Unidade de Ensino
              </Typography>
            </>
          ),
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
            <Box>
              <TextField
                fullWidth
                autoFocus
                size="small"
                color="success"
                sx={{ my: 1 }}
                autoComplete="off"
                placeholder="Buscar por..."
              />
            </Box>

            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Divider component="li" />
              <ListItemButton
                disableRipple
                component={Link}
                href={`/h/ifro-jipa`}
              >
                <ListItemAvatar>
                  <Avatar alt="I" src="#" />
                </ListItemAvatar>

                <ListItemText primary="Instituto Federal de Rondônia - Campus Ji-Paraná" />
              </ListItemButton>
              <Divider component="li" />
            </List>
          </Box>
        </Container>
      </LayoutBase>
    </>
  );
}
