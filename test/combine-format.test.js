
import winston from "winston";

test("logging with combine format", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.prettyPrint()
        ),
        transports: [
            new winston.transports.Console({})
        ],
    });

    logger.info("Hello Format")

});

test("logging with combine format 2", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(log => {
                return `${log.timestamp} - ${log.level.toUpperCase()} : ${log.message}`
            })
        ),
        transports: [
            new winston.transports.Console({})
        ],
    });

    logger.info("Hello Format")

});
