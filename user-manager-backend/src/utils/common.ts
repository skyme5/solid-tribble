import { QueryFailedError } from 'typeorm';

export const queryFailedGuard = (
  err: any,
): err is QueryFailedError & { code: string; detail: string } =>
  err instanceof QueryFailedError;
