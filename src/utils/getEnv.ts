export function getEnvVar(key: string): string | undefined {
  // @ts-ignore: Safe fallback for environments that don't support import.meta
  if (typeof import.meta !== "undefined" && typeof import.meta.env !== "undefined") {
    return import.meta.env[key as any];
  }

  return process.env[key];
}
