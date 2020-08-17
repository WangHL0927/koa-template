type OutputStatus = number; // response status code. success : 0

export interface BaseOutput<T> {
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

export class BaseError implements BaseOutput<null> {
  code: number;
  message: string;
  data = null;
  timestamp = new Date().toISOString();

  constructor(code?: number, message?: string) {
    this.code = code || 1000;
    this.message = message || 'error.';
  }
}

export class BaseSuccess implements BaseOutput<string> {
  code = 0;
  data = 'success.';
  message = null;
  timestamp = new Date().toISOString();
}


