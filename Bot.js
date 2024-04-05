const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/webhook', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('¡Hola! Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
  console.log('Servidor web escuchando en el puerto 3000');
});
