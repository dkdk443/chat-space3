$(function(){
  var search_result = $('#user-search-result')
  var chat_group_users = $('#chat-group-users')
  
  function appendUser(user){
    var html =
              `<div class="chat-group-user js-add-user clearfix">
              <p class="chat-group-user__name">
              ${user.name}
              </p>
              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">
              追加
              </div>
            </div>`
    search_result.append(html)
  }

  function appendErrMsgToUser(msg){
    var html =
              `<div class="chat-group-user clearfix">
              ${msg}
            </div>`
    search_result.append(html)
  }
  
  function appendChatUser(user_id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${user_id}'>
    <input name='group[user_ids][]' type='hidden' value='${user_id}'>
    <p class='chat-group-user__name'>${name}</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`
  chat_group_users.append(html)
  }

  $('#user-search-field').keyup(function(){
    var input = $('#user-search-field').val();
    $.ajax({
      url: '/users',
      type: 'get',
      dataType: 'json',
      data: {keyword: input},
    })
    .done(function(users){
      $('#user-search-result').empty();
      if(users.length !== 0 && input.length !== 0){
        users.forEach(function(user){
         appendUser(user);
        })
      }
      else{
        appendErrMsgToUser("一致するユーザーはいません")
      }
    })
  })


  $('#user-search-result').on('click', '.user-search-add',function(){
    var user_id = $(this).attr('data-user-id');
   
    var name = $(this).attr('data-user-name');
    $(this).parent().remove();
    appendChatUser(user_id, name);
  
    })

  $('#chat-group-users').on('click', '.user-search-remove', function(){
    $(this).parent().remove();
  })

  
});
