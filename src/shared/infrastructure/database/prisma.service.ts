import { Injectable, OnModuleInit, INestApplication, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

async enableShutdownHooks(app: INestApplication) {
  (this as any).$on('beforeExit', async () => {
    await app.close();
  });
}
}

