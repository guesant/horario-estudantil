import { getMeilisearchClient } from 'src/infraestructure/meilisearch/get-meilisearch-client';
import { INDEX_INSTITUICAO } from 'src/infraestructure/meilisearch/SEARCH_INDEXES';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';

type IEntities = UnidadeEstudantilEntity;

@EventSubscriber()
export class SearchSubscriber implements EntitySubscriberInterface<IEntities> {
  listenTo() {
    return UnidadeEstudantilEntity;
  }

  async beforeInsert(event: InsertEvent<IEntities>) {
    const client = await getMeilisearchClient();
    await client.index(INDEX_INSTITUICAO).addDocuments([event.entity]);
    event.entity.lastSearchSync = new Date();
  }

  async beforeUpdate(event: UpdateEvent<IEntities>) {
    const client = await getMeilisearchClient();
    await client.index(INDEX_INSTITUICAO).addDocuments([event.entity]);
    event.entity.lastSearchSync = new Date();
  }

  async beforeRemove(event: RemoveEvent<IEntities>) {
    const client = await getMeilisearchClient();
    await client.index(INDEX_INSTITUICAO).deleteDocument(event.entity.id);
    event.entity.lastSearchSync = new Date();
  }

  // afterSoftRemove(event: SoftRemoveEvent<IEntities>) {
  //   console.log(
  //     `AFTER ENTITY WITH ID ${event.entityId} SOFT REMOVED: `,
  //     event.entity,
  //   );
  // }

  // afterRecover(event: RecoverEvent<IEntities>) {
  //   console.log(
  //     `AFTER ENTITY WITH ID ${event.entityId} RECOVERED: `,
  //     event.entity,
  //   );
  // }

  // afterTransactionCommit(event: TransactionCommitEvent) {
  //   console.log(`AFTER TRANSACTION COMMITTED: `, event);
  // }

  // afterTransactionRollback(event: TransactionRollbackEvent) {
  //   console.log(`AFTER TRANSACTION ROLLBACK: `, event);
  // }
}
