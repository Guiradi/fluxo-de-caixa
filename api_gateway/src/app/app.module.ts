import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronModule } from '@modules/cron/cron.module';
import { EventModule } from '@modules/event/event.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiverModule } from '@modules/receivers/receivers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CronModule,
    EventModule,
    ReceiverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
