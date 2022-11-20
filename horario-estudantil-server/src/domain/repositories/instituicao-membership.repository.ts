import { DataSource } from 'typeorm';
import { InstituicaoMembershipEntity } from '../entities/instituicao-membership.entity';

export type IInstituicaoMembershipRepository = ReturnType<
  typeof getInstituicaoMembershipRepository
>;

export const getInstituicaoMembershipRepository = (
  dataSource: DataSource,
) => {
  return dataSource.getRepository(InstituicaoMembershipEntity).extend({});
};
