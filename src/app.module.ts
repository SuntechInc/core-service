import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [AppService],
})
export class AppModule {}
