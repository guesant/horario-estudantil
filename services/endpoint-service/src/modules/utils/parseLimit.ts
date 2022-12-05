export const parseLimit = (reqLimit: any) => {
  if (Number.isInteger(reqLimit)) {
    return Math.min(Math.max(reqLimit, 1), 100);
  }

  return 20;
};
