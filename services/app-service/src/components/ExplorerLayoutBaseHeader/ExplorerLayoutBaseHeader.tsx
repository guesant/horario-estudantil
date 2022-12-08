import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import ExplorerUIContainer from '../ExplorerUIContainer';
import UIHeaderBrand from '../UIHeaderBrand/UIHeaderBrand';

export type IExplorerLayoutBaseHeader = {
  beforeBrand?: any;
  afterBrand?: any;

  AppBarProps?: Omit<AppBarProps, 'children'>;
  ToolbarProps?: Omit<ToolbarProps, 'children'>;
};

const ExplorerLayoutBaseHeader = (props: IExplorerLayoutBaseHeader) => {
  const { AppBarProps, ToolbarProps, beforeBrand, afterBrand } = props;

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        color={'success' as any}
        {...AppBarProps}
      >
        <ExplorerUIContainer>
          <Toolbar
            disableGutters
            {...ToolbarProps}
            sx={{ display: 'flex', ...ToolbarProps?.sx }}
          >
            {beforeBrand}

            <UIHeaderBrand />

            {afterBrand}
          </Toolbar>
        </ExplorerUIContainer>
      </AppBar>
    </>
  );
};

export default ExplorerLayoutBaseHeader;
