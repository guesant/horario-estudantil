import { IPainelLayoutBreadcrumbItem } from '../PainelLayoutMain/IPainelLayoutBreadcrumbItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DomainRoundedIcon from '@mui/icons-material/DomainRounded';

export const PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS: IPainelLayoutBreadcrumbItem[] =
  [
    {
      label: 'Painel',
      href: '/dashboard',
      icon: HomeRoundedIcon,
    },

    {
      label: 'Instituições',
      href: '/dashboard/instituicoes',
      icon: DomainRoundedIcon,
    },
  ];
