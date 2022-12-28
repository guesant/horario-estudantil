import { SetMetadata } from '@nestjs/common';
import { AuthMode } from '../consts/AuthMode';
import { AUTH_MODE_KEY } from '../consts/AUTH_MODE_KEY.const';

export const ResourceAuth = (mode = AuthMode.ANONYMOUS) => {
  return SetMetadata(AUTH_MODE_KEY, mode);
};
