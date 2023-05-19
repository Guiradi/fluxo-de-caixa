import { TransactionEntity } from '@modules/transactions/transactions.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class CashInService {
  constructor(
    @Inject('cash-in-producer')
    private readonly producer: Producer,
  ) {}

  async registerCashIn(transaction: TransactionEntity): Promise<void> {
    this.producer.send({
      topic: 'cash-in',
      messages: [{ key: transaction.id, value: JSON.stringify(transaction) }],
    });
  }
}
