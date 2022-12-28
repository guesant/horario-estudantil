import { Module } from '@nestjs/common';
import { meilisearchProviders } from './providers/meilisearch-client.providers';

@Module({
  providers: [...meilisearchProviders],
  exports: [...meilisearchProviders],
})
export class SearchModule {}
