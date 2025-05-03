import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { PrismaModule } from './shared/infrastructure/database/prisma.module';

@Module({
  imports: [PrismaModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
