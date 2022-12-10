import { IPainelLayoutBreadcrumbItem } from '../PainelLayoutMain/IPainelLayoutBreadcrumbItem';
import { PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS } from '../PainelPageInstituicoes/PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export const PAINEL_PAGE_INSTITUICOES_NOVO_BREADCRUMB_ITEMS: IPainelLayoutBreadcrumbItem[] =
  [
    ...PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS,

    {
      label: 'Nova Instituição',
      href: '/dashboard/instituicoes/novo',
      icon: AddRoundedIcon,
    },
  ];
