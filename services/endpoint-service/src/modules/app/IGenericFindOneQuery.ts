import { FindOneOptions } from 'typeorm';

export type IGenericFindOneQuery<Entity extends { id: unknown }> = {
  id: Entity['id'];
  options?: FindOneOptions<Entity>;
};
