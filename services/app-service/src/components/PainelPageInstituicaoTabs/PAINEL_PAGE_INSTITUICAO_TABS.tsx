import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { IPainelPageInstituicaoTab } from './IPainelPageInstituicaoTab';
import GroupsIcon from '@mui/icons-material/GroupsRounded';
import HailIcon from '@mui/icons-material/HailRounded';
import ClassIcon from '@mui/icons-material/ClassRounded';
import * as React from 'react';
import dynamic from 'next/dynamic';

const PainelPageInstituicaoTabsGeral = dynamic(
  () => import('../PainelPageInstituicaoTabsGeral'),
);

const PainelPageInstituicaoTabsTurmas = dynamic(
  () => import('../PainelPageInstituicaoTabsTurmas'),
);

const PainelPageInstituicaoTabsProfessores = dynamic(
  () => import('../PainelPageInstituicaoTabsProfessores'),
);

const PainelPageInstituicaoTabsMaterias = dynamic(
  () => import('../PainelPageInstituicaoTabsMaterias'),
);

export const PAINEL_PAGE_INSTITUICAO_TABS = [
  {
    label: 'Geral',
    icon: <InfoRoundedIcon />,
    value: IPainelPageInstituicaoTab.GERAL,
    content: <PainelPageInstituicaoTabsGeral />,
  },
  {
    label: 'Turmas',
    icon: <GroupsIcon />,
    value: IPainelPageInstituicaoTab.TURMAS,
    content: <PainelPageInstituicaoTabsTurmas />,
  },
  {
    label: 'Professores',
    icon: <HailIcon />,
    value: IPainelPageInstituicaoTab.PROFESSORES,
    content: <PainelPageInstituicaoTabsProfessores />,
  },
  {
    label: 'Matérias',
    icon: <ClassIcon />,
    value: IPainelPageInstituicaoTab.MATERIAS,
    content: <PainelPageInstituicaoTabsMaterias />,
  },
];
