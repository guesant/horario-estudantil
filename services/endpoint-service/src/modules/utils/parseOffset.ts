export const parseOffset = (reqOffset: any) => {
  if (Number.isInteger(reqOffset)) {
    return Math.max(reqOffset, 0);
  }

  return 0;
};
