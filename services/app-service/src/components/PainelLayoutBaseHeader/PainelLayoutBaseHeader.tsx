import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import UIHeaderBrand from '../UIHeaderBrand/UIHeaderBrand';

export type IPainelLayoutBaseHeader = {
  beforeBrand?: any;
  afterBrand?: any;

  AppBarProps?: Omit<AppBarProps, 'children'>;
  ToolbarProps?: Omit<ToolbarProps, 'children'>;
};

const PainelLayoutBaseHeader = (props: IPainelLayoutBaseHeader) => {
  const { AppBarProps, ToolbarProps, beforeBrand, afterBrand } = props;

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        color={'success' as any}
        {...AppBarProps}
      >
        <Toolbar
          {...ToolbarProps}
          sx={{ display: 'flex', ...ToolbarProps?.sx }}
        >
          {beforeBrand}

          <UIHeaderBrand href={'/dashboard'} />

          {afterBrand}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PainelLayoutBaseHeader;
