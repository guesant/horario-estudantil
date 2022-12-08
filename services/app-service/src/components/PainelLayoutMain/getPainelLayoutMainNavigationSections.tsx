import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import * as React from 'react';
import { ISection } from './ISection';
import DomainIcon from '@mui/icons-material/Domain';

export const getPainelLayoutMainNavigationSections = (): ISection[] => {
  return [
    {
      label: 'Geral',
      items: [
        {
          label: 'Instituições',
          icon: <DomainIcon />,
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
