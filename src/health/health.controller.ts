// src/health/health.controller.ts
import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller('healthz')
export class HealthController {
  @Get()
  health() {
    return { 
        service: 'core-service',
        status: HttpStatus.OK, 
        timestamp: new Date().toISOString() };
  }
}
