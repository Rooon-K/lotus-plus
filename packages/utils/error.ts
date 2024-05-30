import { isString } from "lodash-es";

class LotusError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LotusError";
  }
}

export function throwError(scope: string, message: string) {
  throw new LotusError(`[${scope}]: ${message}`);
}

export function debugWarn(error: Error): void;

export function debugWarn(scope: string, message: string): void;

export function debugWarn(scope: string | Error, message?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? new LotusError(`[${scope}]: ${message}`) : scope;
    console.warn(err);
  }
}
