import { z } from 'zod';

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: 'Se requiere un título',
      invalid_type_error: 'Se requiere un título',
    })
    .min(3, {
      message: 'El título es demasiado corto',
    }),
  id: z.string(),
});
