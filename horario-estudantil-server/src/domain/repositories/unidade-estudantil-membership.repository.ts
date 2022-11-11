import { DataSource } from 'typeorm';
import { UnidadeEstudantilMembershipEntity } from '../entities/unidade-estudantil-membership.entity';

export type IUnidadeEstudantilMembershipRepository = ReturnType<
  typeof getUnidadeEstudantilMembershipRepository
>;

export const getUnidadeEstudantilMembershipRepository = (
  dataSource: DataSource,
) => {
  return dataSource.getRepository(UnidadeEstudantilMembershipEntity).extend({});
};
