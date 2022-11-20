import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Fragment, useContext } from "react";
import { PortalSelecionarInstituicaoContext } from "./PortalSelecionarInstituicaoContext";
import AppLink from "../AppLink";

const PortalSelecionarInstituicaoResultsList = () => {
  const { instituicoes } = useContext(
    PortalSelecionarInstituicaoContext
  );

  if (instituicoes.length === 0) {
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

        {instituicoes.map((instituicao) => (
          <Fragment key={instituicao.id}>
            <ListItemButton
              alignItems="flex-start"
              LinkComponent={AppLink}
              title={instituicao.nome}
              href={`/?ue=${instituicao.sigla}`}
            >
              <ListItemAvatar>
                <Avatar alt={instituicao.apelido}>
                  {instituicao.apelido[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={instituicao.apelido}
                secondary={
                  <Fragment>
                    <Typography
                      variant="body2"
                      component="span"
                      color="text.primary"
                      sx={{ display: "inline" }}
                    >
                      {instituicao.nome}
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

export default PortalSelecionarInstituicaoResultsList;
