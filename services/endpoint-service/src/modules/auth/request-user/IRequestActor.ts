import { UserinfoResponse } from 'openid-client';

export type IRequestActor = {
  id: number;

  userinfo: UserinfoResponse;
};
