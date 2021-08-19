const express = require ( "express" )

const authController = require ( "../controllers/auth-controller" )
const greetingsController = require ( "../controllers/greetings-controller" )

const router = express.Router ()

// This endpoint is intercepted by authController.buildJwtToken middleware
router.post ( "/send-greetings", authController.buildJwtToken, greetingsController.sendGreetings )

// This endpoint is intercepted by authController.verifyJwtToken middleware
router.get ( "/greetings?:name", authController.verifyJwtToken, greetingsController.receiveGreetings )

module.exports = router