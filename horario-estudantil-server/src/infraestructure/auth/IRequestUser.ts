import { UserinfoResponse } from 'openid-client';

export type IRequestUser = {
  id: number;

  userinfo: UserinfoResponse;
};
