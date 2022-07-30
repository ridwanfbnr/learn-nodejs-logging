
import winston from "winston";

test("create new logger with console & file transport", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "applications.log",
                level: "info",
            }),
            new winston.transports.File({
                filename: "errors.log",
                level: "error",
            }),
        ],
    });

    logger.info("Hello Info!");
    logger.info("Hello Info!");
    logger.error("Hello Error!");
    logger.info("Hello Info!");
    logger.error("Hello Error!");
});
