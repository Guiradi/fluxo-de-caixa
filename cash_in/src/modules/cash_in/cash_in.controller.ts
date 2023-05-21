import { Controller } from '@nestjs/common';
import { CashInService } from './cash_in.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class CashInController {
  constructor(private readonly cashInService: CashInService) {}

  @EventPattern('cash-in')
  handleRegister(data: string): Promise<void> {
    return this.cashInService.registerCashIn(data);
  }
}
