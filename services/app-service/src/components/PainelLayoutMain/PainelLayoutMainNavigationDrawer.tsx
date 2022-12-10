import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { useMemo } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBackRounded';
import Link from 'next/link';
import PainelLayoutMainNavigationDrawerSection from './PainelLayoutMainNavigationDrawerSection';
import { getPainelLayoutMainNavigationSections } from './getPainelLayoutMainNavigationSections';

const PainelLayoutMainNavigationDrawer = () => {
  const sections = useMemo(() => getPainelLayoutMainNavigationSections(), []);

  return (
    <div>
      <Toolbar sx={{ px: 1 }} disableGutters>
        <Button
          fullWidth
          href={'/'}
          color={'secondary'}
          variant={'outlined'}
          LinkComponent={Link}
          startIcon={<ArrowBackIcon />}
          sx={{ justifyContent: 'flex-start', px: 2 }}
        >
          Voltar ao Início
        </Button>
      </Toolbar>

      {sections.map((section) => (
        <PainelLayoutMainNavigationDrawerSection
          section={section}
          key={section.label}
        />
      ))}

      <Divider />
    </div>
  );
};

export default PainelLayoutMainNavigationDrawer;
