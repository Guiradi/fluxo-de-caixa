import { Controller } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CashInService } from './cash_in.service';
import { TransactionEntity } from '@modules/transactions/transactions.entity';

@Controller()
export class CashInController {
  constructor(private readonly cashInService: CashInService) {}

  @OnEvent('CASH_IN')
  handleRegister(data: TransactionEntity): Promise<void> {
    return this.cashInService.registerCashIn(data);
  }
}
