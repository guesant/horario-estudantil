import { createContext, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

type IPainelPageInstituicaoContext = {
  id_ins: number;
};

export const PainelPageInstituicaoContext = createContext(
  {} as IPainelPageInstituicaoContext,
);

export const PainelPageInstituicaoContextProvider = (
  props: PropsWithChildren<{}>,
) => {
  const { children } = props;

  const router = useRouter();

  const id_ins = +(router.query.id_ins as string);

  return (
    <PainelPageInstituicaoContext.Provider value={{ id_ins }}>
      {children}
    </PainelPageInstituicaoContext.Provider>
  );
};
