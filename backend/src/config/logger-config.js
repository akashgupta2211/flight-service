const { createLogger, format, transports } = require("winston");
const customFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.printf(({ timestamp, level, message, ...meta }) => {
    return `${timestamp} ${level}: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ""
    }`;
  })
)
const logger = createLogger({
  level: "info",
  format: customFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: "app.log" }),
  ],
});
module.exports = logger;
