$(function(){
  function buildHTML(message){
    var html = ` <div class="chatArea__chat">
                    <div class="chatArea__chat--name">
                          ${user_id}
                    </div>
                    <div class="chatArea__chat--date">
                          ${created_at("%Y/%m/%d %H:%M")}
                    <div class="chatArea__chat--message">
                          ${message}
                    </div>
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
      // alert('sucsess!')
      var html = buildHTML(data);
      $('.chatArea').append(html)
      $('#sendMessageText').val()
     }) 

    .fail(function(){
      alert('error!')
    })

  });
})