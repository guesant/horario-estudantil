import { createContextualCan } from '@casl/react';
import { AuthAbilityContext } from './AuthAbilityContext';

export const AuthAbilityCan = createContextualCan(AuthAbilityContext.Consumer);
