export const getEntityRef = <E extends { id: any }>(
  entity: E,
): Pick<E, 'id'> => ({
  id: entity.id,
});
