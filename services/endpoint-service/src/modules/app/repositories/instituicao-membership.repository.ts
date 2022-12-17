import { DataSource } from 'typeorm';
import { InstituicaoMembershipDbEntity } from '../entities/instituicao-membership.db.entity';

export type IInstituicaoMembershipRepository = ReturnType<
  typeof getInstituicaoMembershipRepository
>;

export const getInstituicaoMembershipRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(InstituicaoMembershipDbEntity).extend({});
};
