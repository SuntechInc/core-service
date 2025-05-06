import { Global, Module } from '@nestjs/common'
import { PinoLogger } from './pino.logger'

@Global()
@Module({
  providers: [
    {
      provide: 'LOGGER',
      useClass: PinoLogger,
    },
  ],
  exports: ['LOGGER'],
})
export class LoggingModule {} 