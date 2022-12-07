import AppBar, {AppBarProps} from '@mui/material/AppBar';
import Toolbar, {ToolbarProps} from '@mui/material/Toolbar';
import AppContainer from '../UIExplorerContainer';
import UIHeaderBrand from "./UIHeaderBrand";

export const ITEM_HEIGHT = 48;

export type IUIHeaderProps = {
  AppBarProps?: Omit<AppBarProps, 'children'>;
  ToolbarProps?: Omit<ToolbarProps, 'children'>;

  beforeBrand?: any;
  afterBrand?: any;
};

const UIHeader = (props: IUIHeaderProps) => {
  const { AppBarProps, ToolbarProps, beforeBrand, afterBrand } = props;

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        color={'success' as any}
        {...AppBarProps}
      >
        <AppContainer>
          <Toolbar
            disableGutters
            {...ToolbarProps}
            sx={{ display: 'flex', ...ToolbarProps?.sx }}
          >
            {beforeBrand}

            <UIHeaderBrand />

            {afterBrand}
          </Toolbar>
        </AppContainer>
      </AppBar>
    </>
  );
};

export default UIHeader;
