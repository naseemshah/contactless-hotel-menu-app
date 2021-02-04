// for middleware
// update when otp part in done

var testMiddleware = function (req, res, next) {
    console.log('LOGGED')
    next()
}
module.exports = testMiddleware