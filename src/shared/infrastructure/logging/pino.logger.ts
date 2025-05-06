import { LoggerService } from '@nestjs/common'
import pino from 'pino'

export class PinoLogger implements LoggerService {
  private readonly logger: pino.Logger

  constructor() {
    this.logger = pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          levelFirst: true,
          translateTime: 'SYS:standard',
        },
      },
    })
  }

  log(message: string, context?: string) {
    this.logger.info({ context }, message)
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error({ context, trace }, message)
  }

  warn(message: string, context?: string) {
    this.logger.warn({ context }, message)
  }

  debug(message: string, context?: string) {
    this.logger.debug({ context }, message)
  }

  verbose(message: string, context?: string) {
    this.logger.trace({ context }, message)
  }
} 