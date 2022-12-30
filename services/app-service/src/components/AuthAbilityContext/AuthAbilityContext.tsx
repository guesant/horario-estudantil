import { createContext } from 'react';
import { authorization } from '@horario-estudantil/schemas';

export const AuthAbilityContext = createContext({} as authorization.AppAbility);
