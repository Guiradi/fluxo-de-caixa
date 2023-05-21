import { TransactionStatus } from '@models/enumerators';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CashInEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  amount: number;

  @Column()
  description?: string;

  @Column({ default: TransactionStatus.PENDING })
  status?: TransactionStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  constructor(id: string, amount: number, description: string) {
    this.id = id;
    this.amount = amount;
    this.description = description;
  }
}
