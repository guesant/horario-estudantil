import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { InstituicaoDbEntity } from '../entities/instituicao.db.entity';
import { getMeilisearchClient } from '../../search/infrastructure/getMeilisearchClient';
import { INDEX_INSTITUICAO } from '../../search/infrastructure/SEARCH_INDEXES';
import { Instituicao } from '@horario-estudantil/schemas';
import { pick } from 'lodash';

const PRIMARY_KEY = 'id';

const getExportedInstituicao = <T extends Instituicao>(instituicao: T) =>
  pick(instituicao, ['id', 'nome', 'sigla', 'apelido', 'lastUpdate']);

@EventSubscriber()
export class SearchSubscriber
  implements EntitySubscriberInterface<InstituicaoDbEntity>
{
  listenTo() {
    return InstituicaoDbEntity;
  }

  async beforeInsert(event: InsertEvent<InstituicaoDbEntity>) {
    const entity = event.entity;
    entity.lastUpdate = new Date();
    entity.lastSearchSync = new Date();
  }

  async beforeUpdate(event: UpdateEvent<InstituicaoDbEntity>) {
    const entity = <InstituicaoDbEntity>event.entity;

    if (entity) {
      entity.lastUpdate = new Date();
      entity.lastSearchSync = new Date();
    }
  }

  async afterInsert(event: InsertEvent<InstituicaoDbEntity>) {
    const client = await getMeilisearchClient();

    const entity = event.entity;

    await client
      .index(INDEX_INSTITUICAO)
      .updateDocuments([getExportedInstituicao(entity)], {
        primaryKey: PRIMARY_KEY,
      });
  }

  async afterUpdate(event: UpdateEvent<InstituicaoDbEntity>) {
    const client = await getMeilisearchClient();

    const entity = <InstituicaoDbEntity>event.entity;

    if (entity) {
      await client
        .index(INDEX_INSTITUICAO)
        .updateDocuments([getExportedInstituicao(entity)], {
          primaryKey: PRIMARY_KEY,
        });
    }
  }

  async afterRemove(event: RemoveEvent<InstituicaoDbEntity>) {
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
