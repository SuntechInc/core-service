import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return {
      status: HttpStatus.OK,
      service: 'core-service',
      timestamp: new Date().toISOString(),
    };
  }
}
