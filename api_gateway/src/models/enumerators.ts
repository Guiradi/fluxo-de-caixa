export enum TransactionStatus {
  PENDING = 1,
  AUTHORIZED = 2,
  IN_PROGRESS = 3,
  COMPLETED = 4,
  CANCELLED = 5,
  REJECTED = 6,
  REFUNDED = 7,
}

export enum TransactionType {
  CASH_IN = 1,
  CASH_OUT = 2,
}
