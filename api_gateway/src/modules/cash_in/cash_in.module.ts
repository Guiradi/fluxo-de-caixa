import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { CashInController } from './cash_in.controller';
import { CashInService } from './cash_in.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'cash-in',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'cash-in',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'cash-in-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [CashInController],
  providers: [
    CashInService,
    {
      provide: 'cash-in-producer',
      useFactory: async (kafkaClient: ClientKafka) => {
        return kafkaClient.connect();
      },
      inject: ['cash-in'],
    },
  ],
})
export class CashInModule {}
