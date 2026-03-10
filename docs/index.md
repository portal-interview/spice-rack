# Spice Rack

The essential SPICES every Flavortown service needs! Logging, config, and common utilities.

Spice Rack is the shared backend utility library used by all Node.js/TypeScript services in Flavortown. It provides structured logging, environment-based configuration loading, and common patterns that every service needs. Instead of each service reinventing the wheel, they reach for the Spice Rack.

## Utilities

### Logger

Structured JSON logging with service name, log level, and timestamps.

```typescript
import { Logger } from '@flavortown/spice-rack';

const log = new Logger('kitchen-api');
log.info('Order received', { orderId: '42', items: 3 });
```

### Config

Type-safe environment variable loading with required key validation.

```typescript
import { loadConfig } from '@flavortown/spice-rack';

const config = loadConfig(['DATABASE_URL', 'PORT', 'API_KEY']);
```

## Design Principles

Keep it small, keep it focused. Every utility in the Spice Rack should be something that at least 3 services need. If only one service needs it, it belongs in that service.
