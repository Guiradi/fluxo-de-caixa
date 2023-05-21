import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CashInEntity } from './cash_in.entity';
import { TransactionStatus } from '@models/enumerators';

@Injectable()
export class CashInService {
  constructor(
    @InjectRepository(CashInEntity)
    private readonly cashInRepository: Repository<CashInEntity>,
  ) {}

  async registerCashIn(data: string): Promise<void> {
    const { id, amount, description } = JSON.parse(data);
    const cashIn = await this.cashInRepository.save(
      new CashInEntity(id, amount, description),
    );

    // processa transação

    cashIn.status = TransactionStatus.COMPLETED;
    await this.cashInRepository.save(cashIn);

    // atualiza saldo
    // atualiza transaction
  }
}
