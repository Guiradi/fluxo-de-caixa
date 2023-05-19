import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { TransactionEntity } from './transactions.entity';
import { TransactionDto } from '@dto/transaction.dto';
import { TransactionType } from '@models/enumerators';
import { ResponseMessage } from '@models/response';

@Controller('/transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async findAll(): Promise<TransactionEntity[]> {
    return this.transactionService.findAll();
  }

  @Post('/income')
  async createDebit(
    @Body() transactionDto: TransactionDto,
  ): Promise<ResponseMessage> {
    const newTransactionRegister = await this.transactionService.create({
      ...transactionDto,
      type: TransactionType.CASH_IN,
    });
    this.transactionService.sendEvent('CASH_IN', newTransactionRegister);

    return {
      message: 'Seu recebimento está sendo processado!',
    };
  }
}
