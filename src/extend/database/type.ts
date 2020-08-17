export class DBTransactionError {
  step: number;
  code: number;
  message: string;

  constructor(step: number, code: number, message: string) {
    this.step = step;
    this.code = code;
    this.message = message
  }
}
