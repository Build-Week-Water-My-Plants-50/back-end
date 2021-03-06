const checkValidateBody = (req, res, next) => {
    if (req.body.nickname === undefined || typeof req.body.nickname.trim() != 'string') {
        next({ status: 422, message: 'nickname must be provided as a string' })
    } else if (req.body.species === undefined || typeof req.body.species.trim() != 'string') {
        next({ status: 422, message: 'species must be provided as a string' })
    } else if (req.body.h2oFrequency === undefined || typeof req.body.h2oFrequency.trim() != 'string') {
        next({ status: 422, message: 'h2oFrequency must be provided as a string' })
    } else {
        req.body.user_id = req.decodedToken.subject
        next()
    }
}

module.exports = {
    checkValidateBody
}
