import { ACTION, AuditLog } from '@prisma/client';

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case ACTION.CREATE:
      return `creó ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `actualizó ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `eliminó ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `acción desconocida ${entityType.toLowerCase()} "${entityTitle}"`;
  }
};
