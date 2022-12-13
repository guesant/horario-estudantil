import { SetMetadata } from '@nestjs/common';
import { AuthMode } from './AuthMode';
import { AUTH_MODE } from './constants/IS_PUBLIC_KEY.const';

export const ResourceAuth = (mode = AuthMode.ANONYMOUS) => {
  return SetMetadata(AUTH_MODE, mode);
};
