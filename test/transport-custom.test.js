
import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {

    class MyTransport extends TransportStream {
        constructor(opts) {
            super(opts);
        }

        log(info, next) {
            console.log(`${new Date()} - ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger = winston.createLogger({
        level: "info",
        transports: [
            new MyTransport({}),
        ]
    });

    logger.info("Hello world!");
    logger.error("Hello error!");
    logger.info("Hello world!");
    logger.error("Hello error!");
    logger.info("Hello world!");
});
