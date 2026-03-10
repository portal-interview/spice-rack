export function loadConfig<T extends Record<string, string>>(keys: (keyof T)[]): T {
  const config = {} as Record<string, string>;
  for (const key of keys) {
    const value = process.env[key as string];
    if (!value) {
      throw new Error(`Missing required environment variable: ${String(key)}`);
    }
    config[key as string] = value;
  }
  return config as T;
}
