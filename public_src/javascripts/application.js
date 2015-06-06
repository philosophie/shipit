var moment = require('moment'),
    socket = io();

var $app = document.getElementById('app-name');
var $deployedAt = document.getElementById('deployed-at');
var sound = new Audio('/sounds/sm64_key_get.wav');

socket.on('app deployed', function(data) {
  $app.textContent = data.app;
  $deployedAt.textContent = moment().format('dddd [at] h:mm a');
  sound.play();
});
