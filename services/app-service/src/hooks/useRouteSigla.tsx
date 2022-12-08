import { useRouter } from 'next/router';

export const useRouteSigla = (): string | null => {
  const { query } = useRouter();

  const { sigla_ins } = query;

  const sigla = typeof sigla_ins === 'string' ? sigla_ins.trim() : null;

  return sigla || null;
};
