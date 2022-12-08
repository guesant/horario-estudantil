import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import * as React from 'react';
import { ISection } from './ISection';

export const getPainelLayoutMainNavigationSections = (): ISection[] => {
  return [
    {
      label: 'Geral',
      items: [
        {
          label: 'Instituições',
          icon: <MapsHomeWorkIcon />,
          href: '/dashboard/instituicoes(/*rest)',
        },
        {
          label: 'Minha Conta',
          icon: <AccountCircleIcon />,
          href: '/dashboard/minha-conta',
        },
      ],
    },
    {
      label: 'Administrar',
      items: [
        {
          icon: <PeopleIcon />,
          label: 'Usuários',
          href: '/dashboard/usuarios(/*rest)',
        },
      ],
    },
  ];
};
