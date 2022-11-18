import { Provider } from '@nestjs/common';
import { MEILISEARCH_CLIENT } from '../constants';
import { getMeilisearchClient } from '../meilisearch/get-meilisearch-client';

export const meilisearchProviders: Provider[] = [
  {
    provide: MEILISEARCH_CLIENT,
    useFactory: async () => {
      const client = await getMeilisearchClient();
      return client;
    },
  },
];
