exports.middlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Passei no middleware global');
    console.log();
    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log("Sou seu outro middleware")
    next()
}