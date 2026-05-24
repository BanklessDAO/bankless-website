/** Minimal typings for Cloudflare Pages Functions (`functions/api/*`) during `next build`. */
interface KVNamespace {
  get(key: string): Promise<string | null>
  put(key: string, value: string | ReadableStream | ArrayBuffer, options?: Record<string, unknown>): Promise<void>
  delete(key: string): Promise<void>
}

/** Handler signature used by `functions/api/*` exports (`onRequest`, `onRequestGet`, …). */
type PagesFunction<Env = unknown> = (context: {
  request: Request
  env: Env
  waitUntil?: (promise: Promise<unknown>) => void
}) => Response | Promise<Response>

/** Cron / scheduled exports */
interface ScheduledEvent {
  readonly scheduledTime: number
  readonly cron: string
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void
}
