import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { InstituicaoEntity } from '../entities/instituicao.entity';
import { getMeilisearchClient } from '../../search/infrastructure/getMeilisearchClient';
import { INDEX_INSTITUICAO } from '../../search/infrastructure/SEARCH_INDEXES';

const PRIMARY_KEY = 'id';

@EventSubscriber()
export class SearchSubscriber
  implements EntitySubscriberInterface<InstituicaoEntity>
{
  listenTo() {
    return InstituicaoEntity;
  }

  async beforeInsert(event: InsertEvent<InstituicaoEntity>) {
    const entity = event.entity;
    entity.lastUpdate = new Date();
    entity.lastSearchSync = new Date();
  }

  async beforeUpdate(event: UpdateEvent<InstituicaoEntity>) {
    const entity = event.entity;

    if (entity) {
      entity.lastUpdate = new Date();
      entity.lastSearchSync = new Date();
    }
  }

  async afterInsert(event: InsertEvent<InstituicaoEntity>) {
    const client = await getMeilisearchClient();

    const entity = event.entity;

    await client
      .index(INDEX_INSTITUICAO)
      .addDocuments([entity], { primaryKey: PRIMARY_KEY });
  }

  async afterUpdate(event: UpdateEvent<InstituicaoEntity>) {
    const client = await getMeilisearchClient();

    const entity = event.entity;

    if (entity) {
      await client
        .index(INDEX_INSTITUICAO)
        .addDocuments([entity], { primaryKey: PRIMARY_KEY });
    }
  }

  async afterRemove(event: RemoveEvent<InstituicaoEntity>) {
    const client = await getMeilisearchClient();

    const id = event.entityId ?? event.entity?.id;

    if (id) {
      await client.index(INDEX_INSTITUICAO).deleteDocuments([id]);
    }
  }

  // afterSoftRemove(event: SoftRemoveEvent<InstituicaoEntity>) {
  //   console.log(
  //     `AFTER ENTITY WITH ID ${event.entityId} SOFT REMOVED: `,
  //     event.entity,
  //   );
  // }

  // afterRecover(event: RecoverEvent<InstituicaoEntity>) {
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
