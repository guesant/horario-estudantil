const ensureArray = <T>(arr: T | T[]): T[] =>
  Array.isArray(arr) ? arr : [arr];

export const buildPageTitle = (parts: string | string[]) => {
  return [...ensureArray(parts), 'Horário Estudantil'].join(' | ');
};
