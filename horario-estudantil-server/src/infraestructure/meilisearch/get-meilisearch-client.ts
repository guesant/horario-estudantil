import MeiliSearch from 'meilisearch';
import { INDEX_INSTITUICAO } from './SEARCH_INDEXES';

let clientCache: MeiliSearch | null = null;

export const getMeilisearchClient = async (forceRecreate = false) => {
  if (!clientCache || forceRecreate) {
    const HOST = process.env.MEILI_INSTANCE;
    const API_KEY = process.env.MEILI_API_KEY;

    const client = new MeiliSearch({ host: HOST, apiKey: API_KEY });

    await client
      .index(INDEX_INSTITUICAO)
      .updateSearchableAttributes(['nome', 'sigla', 'apelido']);

    clientCache = client;
  }

  return clientCache;
};
