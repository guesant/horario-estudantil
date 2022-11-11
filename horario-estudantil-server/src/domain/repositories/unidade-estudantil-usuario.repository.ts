import { DataSource } from 'typeorm';
import { UnidadeEstudantilUsuarioEntity } from '../entities/unidade-estudantil-usuario.entity';

export type IUnidadeEstudantilUsuarioRepository = ReturnType<
  typeof getUnidadeEstudantilUsuarioRepository
>;

export const getUnidadeEstudantilUsuarioRepository = (
  dataSource: DataSource,
) => {
  return dataSource.getRepository(UnidadeEstudantilUsuarioEntity).extend({});
};
