import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { PrismaModule } from './shared/infrastructure/database/prisma.module';

@Module({
  imports: [PrismaModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
