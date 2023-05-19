import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './transactions.entity';
import { TransactionController } from './transactions.controller';
import { TransactionService } from './transactions.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity]),
    EventEmitterModule.forRoot(),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
