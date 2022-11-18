import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Fragment, useContext, useMemo } from "react";
import { PortalSelecionarUnidadeDeEnsinoContext } from "./PortalSelecionarUnidadeDeEnsinoContext";
import AppLink from "../AppLink";

const PortalSelecionarUnidadeDeEnsinoResultsList = () => {
  const { unidadesEstudantis } = useContext(
    PortalSelecionarUnidadeDeEnsinoContext
  );

  if (unidadesEstudantis.length === 0) {
    return (
      <>
        <Alert severity="info">Nenhum resultado foi encontrado.</Alert>
      </>
    );
  }

  return (
    <>
      <List sx={{ my: 0, py: 0, bgcolor: "background.paper" }}>
        <Divider component="li" />

        {unidadesEstudantis.map((unidadeEstudantil) => (
          <Fragment key={unidadeEstudantil.id}>
            <ListItemButton
              alignItems="flex-start"
              LinkComponent={AppLink}
              title={unidadeEstudantil.nome}
              href={`/?ue=${unidadeEstudantil.sigla}`}
            >
              <ListItemAvatar>
                <Avatar alt={unidadeEstudantil.apelido}>
                  {unidadeEstudantil.apelido[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={unidadeEstudantil.apelido}
                secondary={
                  <Fragment>
                    <Typography
                      variant="body2"
                      component="span"
                      color="text.primary"
                      sx={{ display: "inline" }}
                    >
                      {unidadeEstudantil.nome}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItemButton>

            <Divider component="li" />
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default PortalSelecionarUnidadeDeEnsinoResultsList;
