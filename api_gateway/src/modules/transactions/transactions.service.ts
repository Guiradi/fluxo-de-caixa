import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transactions.entity';
import { Repository } from 'typeorm';
import { TransactionDto } from '@dto/transaction.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async findAll(): Promise<TransactionEntity[]> {
    return this.transactionRepository.find();
  }

  async create(transactionDto: TransactionDto): Promise<TransactionEntity> {
    return this.transactionRepository.save(transactionDto);
  }

  sendEvent(type: string, transaction: TransactionEntity): void {
    this.eventEmitter.emit(type, transaction);
  }
}
