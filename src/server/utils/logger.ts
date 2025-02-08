import winston from "winston";
const { combine, timestamp, prettyPrint, json, errors, printf, cli } =
  winston.format;

// const levels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// };

export const LOG = winston.createLogger({
  level: "info",
  format: combine(errors({ stack: true }), timestamp(), json(), prettyPrint()),
  transports: [
    new winston.transports.Console({
      format: combine(
        cli(),
        errors({ stack: true }),
        timestamp(),
        printf(
          (log) =>
            `${log.timestamp as string} [${log.level}]: ${log.message as string}`,
        ),
      ),
    }),
    // new winston.transports.File({ filename: "app.log" }),
  ],
});
