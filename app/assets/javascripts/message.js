$(function(){
  // function buildHTML(message){
  //   var html = `<p>
  //                 <strong>
  //                   <a href=groups/${message.group_id}/messages></a>
  //                   :
  //                 </strong>
  //                   ${message.message}
  //               </p>`

  //  }
  $('#sendMessageBtn').submit(function(e){
    e.preventDefalt();
    var formData = new FormData(this);
    $.ajax({
      url: 'messages/create',
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){ // var html = buildHTML(data);
      
    }) 

    .fail(function(){
      alert('error')
    })

  });
})