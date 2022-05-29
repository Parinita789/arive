import { injectable } from 'inversify';
import { createLogger, format, Logger, transports } from 'winston';

export interface ILoggerUtil {
  info(message: string): void;
  error(message: string): void;
}

@injectable()
export class LoggerUtil implements ILoggerUtil {  
  private winston: Logger;

  constructor () {
    this.winston = createLogger({
      transports: [
        new transports.Console({
          level: 'info',
          format: format.combine(
            format.timestamp(),
            format.json(),
          ),
          handleExceptions: true,
        }),
      ],
      exitOnError: false,
    });
  }

  public info(message: string): void {
    this.winston.info(message);
  }

  public error(message: string): void {
    this.winston.error(message);
  }
}
