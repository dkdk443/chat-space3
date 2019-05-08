$(function(){
  function buildHTML(message){
    var image_html = ''
    if(message.image) {
      var image_html =`<div class="chat--image">
                    <img src="${message.image}">   
                    </div>`
    }
    var html = ` <div class="chat" data-message-id= ${message.id} >
                    <div class="chat--name">
                        ${message.name}
                    </div>
                    <div class="chat--date">
                        ${message.created_at}
                    </div>
                    <div class="chat--message">
                        ${message.message}
                    </div>
                      ${image_html}
                  </div>
                ` 
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chatArea').append(html);
      $('.chatArea').animate({scrollTop:$('.chatArea')[0].scrollHeight}, 'fast');
      $('#sendMessageText').val('');
      $('#message_image').val('');
     })
    .fail(function(data){
      alert('ajax-error!')
    })
    .always(function(data){
      $('#sendMessageBtn').prop("disabled",false);
    });

  });

  var interval = setInterval(function(message){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      $('.chat:last').data()
    var last_message_id = $('.chat:last').data();
    $.ajax({
      url: "api/messages/",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id},
    })
    .done(function(messages){
      console.log('sucsess!')
      var insertHTML = ''
      messages.forEach(function(message){
        insertHTML = buildHTML(message);
        $('.chatArea').append(insertHTML);
        $('.chatArea').animate({scrollTop:$('.chatArea')[0].scrollHeight}, 'fast');
      });
    })
    .fail(function(messages) {
      console.log('error');
    }) 
  } else{
    clearInterval(interval);
    }} , 5000 )

});
