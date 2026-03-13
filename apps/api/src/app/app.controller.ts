import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { CreateUserDto } from 'shared-dtos';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('users')
  createUser(@Body() body: CreateUserDto) {
    return {
      ok: true,
      user: {
        email: body.email,
      },
    };
  }

  @Get('lowest-fares/today')
  getTodayLowestFares() {
    // Generate random prices for each route
    const routes = [
      { route: 'DMK-CNX', min: 900, max: 1200 },
      { route: 'DMK-USM', min: 1500, max: 1800 },
      { route: 'DMK-HKT', min: 1200, max: 1400 },
      { route: 'DMK-HDY', min: 1000, max: 1300 },
    ];
    const fares = routes.map(r => ({
      route: r.route,
      priceTHB: Math.floor(Math.random() * (r.max - r.min + 1)) + r.min,
      currency: 'THB',
    }));

    Logger.debug(`Generated fares: ${JSON.stringify(fares)}`, 'AppController');
    return {
      dateISO: new Date().toISOString(),
      fares,
    };
  }
}
