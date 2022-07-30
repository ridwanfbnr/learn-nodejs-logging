
import winston from "winston";
import "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            // new winston.transports.Console({}),
            new winston.transports.DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "7d",
            }),
            new winston.transports.DailyRotateFile({
                level: "error",
                filename: "error-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "14d",
            }),
        ],
    });

    for (let i = 0; i < 10000; i++) {
        logger.info(`Hello World! ${i}`);    
        logger.error(`Hello Error! ${i}`);
    };
});
