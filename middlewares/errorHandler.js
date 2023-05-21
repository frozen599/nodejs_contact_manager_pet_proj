const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack
            })
        case 404:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        default:
            break;
    }
    res.json({message: err.message, stack_trace: err.stack}); 
};

export { errHandler };