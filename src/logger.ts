export class Logger {
  constructor(private readonly service: string) {}

  info(message: string, meta?: Record<string, unknown>) {
    console.log(JSON.stringify({ level: 'info', service: this.service, message, ...meta, timestamp: new Date().toISOString() }));
  }

  warn(message: string, meta?: Record<string, unknown>) {
    console.warn(JSON.stringify({ level: 'warn', service: this.service, message, ...meta, timestamp: new Date().toISOString() }));
  }

  error(message: string, meta?: Record<string, unknown>) {
    console.error(JSON.stringify({ level: 'error', service: this.service, message, ...meta, timestamp: new Date().toISOString() }));
  }
}
