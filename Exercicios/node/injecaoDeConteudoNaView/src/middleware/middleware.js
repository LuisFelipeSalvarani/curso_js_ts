exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    console.log();
    console.log('Passei no middleware global');
    console.log();
    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log("Sou seu outro middleware")
    next()
}