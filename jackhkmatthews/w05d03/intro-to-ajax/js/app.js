//////////////JQEURY//////////////////////

var start = function start(){
  $('button').on('click', function(){
    $.get('https://jsonplaceholder.typicode.com/posts')
      .done(function(data){
        console.log(data[1].body);
        $.each(data, function(index, post){
          $('ul').append('<li>' + post.title + '</li>');
        });
      })
      .fail(function(){
        console.log('error');
      });
  });
};

$(start);

//longer jquery syntax

// var post = {
//   title: $('input').val()
// };
//
// $.ajax({
//   url: 'url.com',
//   type: 'POST',
//   data: post,
//   dataType: 'XML'
// }).done(function(data){
//
// }).fail(function(){
//
// });



//////////////VANILLA JAVASCRIPT//////////////////////
// console.log('js loaded');
//
// var request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
//
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400 ){
//     //sucess
//     var resp = request.responseText;
//     console.log(request);
//   } else {
//     //server error
//     console.log('An error on the server side');
//   }
// };
//
// request.onerror = function() {
//   //client issue
//   console.log('Something went wrong with the client side');
// };
//
// request.send();
