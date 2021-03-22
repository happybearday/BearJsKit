import { createLogger, transports, format } from "winston";
const { Console } = transports;

const logFormat = format.printf((info) => {
  const formattedDate = info.timestamp.replace("T", " ").replace("Z", "");
  return `${formattedDate}|${info.level}|${info.message};`;
});

const Logger = createLogger({
  level: "debug",
});

const consoleTransport = new Console({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.colorize(),
    logFormat
  ),
});
Logger.add(consoleTransport);

export default Logger;
