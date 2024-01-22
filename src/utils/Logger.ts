export class Logger {
  static info(...msgs: any[]) {
    console.log(...msgs);
  }

  static warn(...msgs: any[]) {
    console.log(...msgs);
  }

  static debug(...msgs: any[]) {
    console.log(...msgs);
  }

  static verbose(...msgs: any[]) {
    console.log(...msgs);
  }

  static error(...error: any[]) {
    console.error(...error);
  }
}
