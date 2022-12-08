import { FC } from 'react';

export type IAppPage<Props = {}> = FC<Props> & {
  getInitialProps?: (context: any) => Promise<any>;
  auth?: boolean;
};
