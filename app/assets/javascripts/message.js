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

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    console.log(href)
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
      alert('error!')
    })
    .always(function(data){
      $('#sendMessageBtn').prop("disabled",false);
    });

  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = ※※※
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: ※※※,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
    })
    .fail(function() {
      console.log('error');
    });
  };


})
