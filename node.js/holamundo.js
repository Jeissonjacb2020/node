const http = require("http")

const manejador = function(solicitud, respuesta){
    console.log(respuesta)
    respuesta.end("hola io ;p")
}

const servidor = http.createServer(manejador)

servidor.listen(3001)
