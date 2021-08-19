
exports.verifyJwtToken = ( request, response, next ) => {

    console.log ( "Checking JWT token ..." )

    // TODO Verify JWT token and return 401 if the token is not present or is invalid. Use ROLES custom claim to define roles

    next ()
}

exports.buildJwtToken = ( request, response, next ) => {

    console.log ( "Building JWT token ..." )

    // TODO Use jsonwebtoken to build a JWT token (using HMAC as first implementation) and store it to the Authorization header as Bearer

    next ()
}