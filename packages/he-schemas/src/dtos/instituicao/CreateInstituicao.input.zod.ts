import { z } from "zod";

export const CreateInstituicaoInputZod = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome deve conter ao menos 1 caractere." })
    .max(256, { message: "O nome deve conter até 256 caracteres." }),

  apelido: z
    .string()
    .min(1, { message: "O apelido deve conter ao menos 1 caractere." })
    .max(128, { message: "O apelido deve conter até 128 caracteres." }),

  sigla: z
    .string()
    .min(1, { message: "A sigla deve conter ao menos 1 caractere." })
    .max(64, { message: "A sigla deve conter até 64 caracteres." })
    .regex(/^[a-z0-9\-_]+$/, {
      message:
        "A sigla só pode conter caracteres minúsculos (a-z), números (0-9), hífens (-) e sublinhados (_).",
    }),
});

export type ICreateInstituicaoInput = z.infer<typeof CreateInstituicaoInputZod>;
