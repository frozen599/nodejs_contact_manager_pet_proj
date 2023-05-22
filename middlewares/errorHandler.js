import {BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND,INTERNAL_SERVER_ERROR} from '../constants.js'

const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch (statusCode) {
        case BAD_REQUEST:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack
            })
        case NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            })
        case FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            })
        case INTERNAL_SERVER_ERROR:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stack,
            })
        default:
            break;
    }
    res.json({message: err.message, stack_trace: err.stack}); 
};

export { errHandler };