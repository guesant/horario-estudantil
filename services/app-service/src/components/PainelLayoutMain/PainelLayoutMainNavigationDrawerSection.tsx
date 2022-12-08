import * as React from 'react';
import { useMemo } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import UILink from '../UILink';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ISection, ISectionItem } from './ISection';
import { useRouteMatch } from '../../hooks/useRouteMatch';

type IPainelLayoutMainNavigationDrawerSectionProps = {
  section: ISection;
};

type IPainelLayoutMainNavigationDrawerSectionItemProps = {
  item: ISectionItem;
};

const PainelLayoutMainNavigationDrawerSectionItem = (
  props: IPainelLayoutMainNavigationDrawerSectionItemProps,
) => {
  const { item } = props;

  const { match } = useRouteMatch();

  const { realTarget, isMatched } = useMemo(
    () => match(item.href),
    [item, match],
  );

  if (realTarget === null) {
    return null;
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          href={realTarget}
          LinkComponent={UILink}
          selected={isMatched}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    </>
  );
};
const PainelLayoutMainNavigationDrawerSection = (
  props: IPainelLayoutMainNavigationDrawerSectionProps,
) => {
  const { section } = props;

  return (
    <>
      <Divider />

      <List>
        <ListSubheader>{section.label}</ListSubheader>

        {section.items.map((item) => (
          <PainelLayoutMainNavigationDrawerSectionItem
            item={item}
            key={item.label}
          />
        ))}
      </List>
    </>
  );
};

export default PainelLayoutMainNavigationDrawerSection;
