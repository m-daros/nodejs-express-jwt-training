const jwt = require ( "jsonwebtoken" )
const config = require ( "../config/config" )
const constants = require ( "../config/constants" )

exports.verifyJwtToken = ( request, response, next ) => {

    const authorizatioinHeader = request.header ( constants.AUTHORIZATION_HEADER )
    const jwtToken = authorizatioinHeader.substring ( 8 )

    jwt.verify ( jwtToken, config.jwtSecret, ( error, decoded ) => {

        if ( error ) {

            console.log ( `Error: ${error}, Invalid JWT token: ${jwtToken}` )
            response.status ( 401 ).send ( `Invalid JWT token: ${jwtToken}` )
        }
        else {

            console.log ( `Verified JWT token: ${jwtToken}` )
            console.log ( `Decoided JWT token: ${JSON.stringify ( decoded, null, 2 )}` )

            next ()
        }
    } )
}

exports.buildJwtToken = async ( request, response, next ) => {

    const nowEpoch = Math.round (new Date ().getTime () / 1000 )
    const expiryEpoch = nowEpoch + config.jwtValiditySec

    const claims = { iss: config.jwtIssuer, exp: expiryEpoch, roles: "[USER]" }

    jwt.sign ( claims, config.jwtSecret, { algorithm: config.encryptionAlgorithm }, ( error, token ) => {

        if ( error ) {

            response.status ( 500 ).send ( `Unable to build token for claims: ${claims}, error: ${error}` )
        }
        else {

            request.headers [ constants.AUTHORIZATION_HEADER ] = `Bearer: ${token}`
            console.log ( `Build JWT token: ${token}` )
            next ()
        }
    } )
}