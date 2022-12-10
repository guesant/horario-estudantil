import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Fragment, useContext } from 'react';
import { ExplorerSelectInstituicaoContext } from '../ExplorerSelectInstituicao/ExplorerSelectInstituicaoContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ExplorerDialogSelectInstituicaoContext } from '../ExplorerDialogSelectInstituicaoContext/ExplorerDialogSelectInstituicaoContext';

const ExplorerSelectInstituicaoResultsList = () => {
  const router = useRouter();

  const { instituicoes } = useContext(ExplorerSelectInstituicaoContext);

  const { setIsOpen } = useContext(ExplorerDialogSelectInstituicaoContext);

  if (instituicoes.length === 0) {
    return (
      <>
        <Alert severity="info">Nenhum resultado foi encontrado.</Alert>
      </>
    );
  }

  return (
    <>
      <List sx={{ my: 0, py: 0, bgcolor: 'background.paper' }}>
        <Divider component="li" />

        {instituicoes.map((instituicao) => {
          const target = `/h/${instituicao.sigla}`;

          return (
            <Fragment key={instituicao.id}>
              <ListItemButton
                href={target}
                LinkComponent={Link}
                alignItems="flex-start"
                title={instituicao.nome}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(target).then(() => setIsOpen(false));
                }}
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
                        sx={{ display: 'inline' }}
                      >
                        {instituicao.nome}
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItemButton>

              <Divider component="li" />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};

export default ExplorerSelectInstituicaoResultsList;
