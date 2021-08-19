const axios = require ( "axios" )
const config = require ( "../config/config" )

exports.receiveGreetings = ( request, response, next ) => {

    console.log ( `Received greetings, name: ${request.query.name}` )

    response.status ( 200 ).send ( "thanks" )
}

exports.sendGreetings = ( request, response, next ) => {

    console.log ( `Sending greetings to http://${config.remoteServerHost}:${config.remoteServerport}` )
    axios.get ( `http://${config.remoteServerHost}:${config.remoteServerport}/api/v1/greetings?name=mario` ) // TODO Extract name from request body
        .then ( remoteResponse => {

            response.status ( 200 ).send ( "Greetings sent" )
        } )
}