
import winston from "winston";

test("create new logger with console & file transport level", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log",
                level: "info",
            }),
            new winston.transports.File({
                filename: "application-errors.log",
                level: "error",
            }),
        ],
    });

    logger.info("Hello World!");
    logger.info("Hello World!");
    logger.error("Hello Error!");
    logger.info("Hello World!");
    logger.error("Hello Error!");
});
