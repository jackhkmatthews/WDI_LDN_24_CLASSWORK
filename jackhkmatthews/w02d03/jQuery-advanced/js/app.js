$(function() {

  // $('li').on('mouseenter', function(){
  //   if ($(this).attr('class') === 'black') {
  //     $(this).attr('class', 'white');
  //   } else {
  //     $(this).attr('class', 'black');
  //   }
  // });

  // $('li').on('click', function(){
  //   var $element = $(this);
  //   $(this).hide('slow', 'swing', function(){
  //     setTimeout(function() {
  //       $element.show('slow', 'swing');
  //     }, 10000);
  //   });
  // });

  // $('li').on('click', function(){
  //   var $lis = $(this).siblings();
  //   $lis.fadeOut();
  // });
  $('body').find('li').css('background', 'grey');

  var $li = $('li');

  $.each($li, function(index, element){
    console.log($(element).attr('class'));
  });

});
