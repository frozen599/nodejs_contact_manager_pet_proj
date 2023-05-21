const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    res.json({message: err.message, stack_trace: err.stack}); 
};

export { errHandler };