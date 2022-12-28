import { Provider } from '@nestjs/common';
import { MEILISEARCH_CLIENT } from '../constants/MEILISEARCH_CLIENT.const';
import { getMeilisearchClient } from './getMeilisearchClient';

export const meilisearchProviders: Provider[] = [
  {
    provide: MEILISEARCH_CLIENT,
    useFactory: () => getMeilisearchClient(),
  },
];
