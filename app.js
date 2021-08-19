const express = require ( "express" )
const routes = require ( "./routes/routes.js" )
const config = require ( "./config/config" )

const app = new express ()

app.use ( "/api/v1", routes )

app.listen ( config.serverPort, () => {

    console.log ( `Listen on port ${config.serverPort}` )
} )