var http = require("http")

var manejador = function(solicitud, respuesta){
    console.log(respuesta)
    respuesta.end("hola io ;p")
}

var servidor = http.createServer(manejador)

servidor.listen(3001)
