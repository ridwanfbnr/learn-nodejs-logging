
import winston from "winston";

async function sayHello() {
    return new Promise((res, rej) => {
        return rej("Ups");
    });
};

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true,
            handleRejections: true,
            filename: "rejections.log",
        }),
    ],
});

sayHello()
