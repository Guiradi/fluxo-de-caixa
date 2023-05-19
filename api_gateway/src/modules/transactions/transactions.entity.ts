import { TransactionStatus, TransactionType } from '@models/enumerators';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  amount: number;

  @Column()
  description?: string;

  @Column()
  type: TransactionType;

  @Column({ default: TransactionStatus.PENDING })
  status?: TransactionStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;
}
