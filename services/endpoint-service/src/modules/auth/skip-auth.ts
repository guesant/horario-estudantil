import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from './constants/IS_PUBLIC_KEY.const';

export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
