import { createContext, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GetLoggedUser } from '../../api/graphql/queries/GetLoggedUser';
import { createAbility } from '@horario-estudantil/schemas/dist/authorization';
import { AuthAbilityContext } from '../AuthAbilityContext/AuthAbilityContext';
import { GetLoggedUserQuery } from '../../api/graphql/__generated__/graphql';

type IAuthContext = {
  user: GetLoggedUserQuery['getLoggedUser'] | null;
};

export const AuthContext = createContext({} as IAuthContext);

type IAuthContextProviderProps = {
  children?: any;
};

export const AuthContextProvider = (props: IAuthContextProviderProps) => {
  const { children } = props;

  const session = useSession();

  const loggedUserQuery = useQuery(GetLoggedUser, {
    skip: !session.data?.user,
  });

  const user = useMemo(
    () => loggedUserQuery.data?.getLoggedUser ?? null,
    [loggedUserQuery],
  );

  const rules = useMemo(() => user?.autorizacaoRegras ?? [], [user]);

  const ability = useMemo(() => createAbility(rules), [rules]);

  return (
    <AuthContext.Provider value={{ user }}>
      <AuthAbilityContext.Provider value={ability}>
        {children}
      </AuthAbilityContext.Provider>
    </AuthContext.Provider>
  );
};
