'use strict';

exports.connection = function(socket){
  socket.emit('online', {date: new Date()});
  socket.on('newMessage', messageReceived);
};

function messageReceived(data){
  var socket = this;
  console.log('Received message from the client');
  console.log(data);
  socket.emit('message', data); //broadcasts to all
                                     //socket.broadcast.emit - doesn't broadcast back to yourself
}
