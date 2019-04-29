$(function(){
  function buildHTML(message){
    var html = ` <div class="chat">
                    <div class="chat--name">
                        ${message.name}
                    </div>
                    <div class="chat--date">
                          ${message.created_at}
                    </div>
                    <div class="chat--message">
                          ${message.message}
                    </div>
                  </div>
                ` 
    return html;
    
  }

  function scroll(){
    $('.chatArea').animate({scrollTop: $('.chatArea')[0].scrollHeight}, 'fast');
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
     })

    .fail(function(data){
      console.log(data);
      alert('error!')
    })

    .always(function(data){
      $('#sendMessageBtn').prop("disabled",false);
    });

  });
})