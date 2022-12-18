import {z} from 'zod';

export const SearchInstituicoesInputZod = z.object({
  query: z
    .string()
    .max(100, {message: 'A busca deve conter até 100 caracteres.'})
    .optional(),

  limit: z
    .number()
    .int()
    .min(1, {message: 'O limite deve ser >= 1.'})
    .max(100, {message: 'O limite deve ser <= 100.'})
    .optional(),

  offset: z
    .number()
    .int()
    .min(0, {message: 'O deslocamento deve ser >= 0.'})
    .optional(),

  onlyMemberships: z.boolean().optional(),
});

export type ISearchInstituicoesInput = z.infer<typeof SearchInstituicoesInputZod>