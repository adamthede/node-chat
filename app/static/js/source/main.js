/* global io:true */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    initializeSocketIO();
    $('#sendmessage').click(sendMessage);
  }

  var socket;

  function initializeSocketIO(){
    socket = io.connect('/app'); //app is a namespace for users who can view a message
    socket.on('online', function(data){console.log(data);});
    socket.on('message', postMessage);
  }

  function sendMessage(event){
    var data = {};
    data.text = $('textarea').val();
    socket.emit('newMessage', data);
    $('textarea').val('');
    $('textarea').focus();
    event.preventDefault();
  }

  function postMessage(data){
    var $div = $('<div>');
    $div.text(data.text);
    $('#messages').append($div);
    console.log(data);
  }

})();
