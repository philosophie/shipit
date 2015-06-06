var socket = io();

var $app = document.getElementById('app');

socket.on('app deployed', function(data) {
  $app.textContent = data.app;
});
