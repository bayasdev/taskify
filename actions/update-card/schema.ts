import { z } from 'zod';

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: 'Se requiere una descripción',
        invalid_type_error: 'Se requiere una descripción',
      })
      .min(3, {
        message: 'La descripción es demasiado corta.',
      })
  ),
  title: z.optional(
    z
      .string({
        required_error: 'Se requiere un título',
        invalid_type_error: 'Se requiere un título',
      })
      .min(3, {
        message: 'El título es demasiado corto',
      })
  ),
  id: z.string(),
});
