import { Provider } from '@nestjs/common';
import { MEILISEARCH_CLIENT } from '../constants/MEILISEARCH_CLIENT';
import { getMeilisearchClient } from '../infrastructure/getMeilisearchClient';

export const meilisearchProviders: Provider[] = [
  {
    provide: MEILISEARCH_CLIENT,
    useFactory: async () => {
      const client = await getMeilisearchClient();
      return client;
    },
  },
];
