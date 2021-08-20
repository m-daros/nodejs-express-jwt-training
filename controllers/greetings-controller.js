const axios = require ( "axios" )
const config = require ( "../config/config" )
const constants = require ( "../config/constants" )

exports.receiveGreetings = ( request, response, next ) => {

    console.log ( `Received greetings, name: ${request.query.name}` )

    response.status ( 200 ).send ( "thanks" )
}

exports.sendGreetings = ( request, response, next ) => {

    const url = `http://${config.remoteServerHost}:${config.remoteServerport}/api/v1/greetings?name=${request.query.name}`

    const authorizationHeader = request.headers [ constants.AUTHORIZATION_HEADER ]

    console.log ( `Sending greetings to ${url}` )
    axios.get ( url, { headers: { "Authorization": authorizationHeader } } )
        .then ( remoteResponse => {

            response.status ( 200 ).send ( "Greetings sent" )
        } )
}