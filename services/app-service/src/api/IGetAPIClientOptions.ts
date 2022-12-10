import { GetServerSidePropsContext } from 'next';

export type IGetAPIClientOptions = {
  context?: GetServerSidePropsContext;
  accessToken?: string;
};
