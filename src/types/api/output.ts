type OutputStatus = number; // response status code. success : 0

export interface Output<T> {
  code: OutputStatus;
  data?: T;
  message?: string;
  timestamp: Date | number | string;
}

export class BaseOutput<T> {
  code: OutputStatus;
  data?: T;
  message?: string;
  timestamp: Date | number | string;

  constructor(data) {
    this.code = 0;
    this.message = null;
    this.timestamp = new Date().toISOString();
    this.data = data;
  }
}

export class BaseError implements Output<null> {
  code: number;
  message: string;
  timestamp = new Date();

  constructor(code?: number, message?: string) {
    this.code = code || 1000;
    this.message = message || 'error.';
  }
}


export class Success implements Output<string> {
  code = 0;
  data = 'success.';
  message = null;
  timestamp = new Date();
}

export class ErrorDB implements Output<null> {
  code: number;
  message: string;
  timestamp = new Date();

  constructor(code?: number, message?: string) {
    this.code = code || 2000;
    this.message = message || 'database error.';
  }
}


