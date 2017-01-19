var start = function start(){

  var lastRequest = '';
  var gifCount = 0;

  $.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  .done(function(data){
    var gifsArray = data.data;
    var html = '';
    $.each(gifsArray, function(index, gifObject){
      if (index === 0 || index %4 === 0) {
        html += '<div class="row">';
      }
      html += '<div class="col-xs-6 col-md-3"><a href="' + gifObject.images.fixed_height.url + '" class="thumbnail"><img src="' + gifObject.images.fixed_height.url + '"img></a></div>';
      if (index === 3 || (index + 1)%4 === 0 || index === (gifsArray.length - 1)) {
        html += '</div>';
        $('.row.gifs').append(html);
        html = '';
        console.log(html);
      }
    });
  })
  .fail(function(){
  });

  lastRequest = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
  gifCount = 25;

  $('button#go').on('click', function(e){
    e.preventDefault();
    $('.row.gifs').html('');
    var search = $('input').val();
    $.get('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC')
      .done(function(data){
        var gifsArray = data.data;
        var html = '';
        $.each(gifsArray, function(index, gifObject){
          if (index === 0 || index %4 === 0) {
            html += '<div class="row">';
          }
          html += '<div class="col-xs-6 col-md-3"><a href="' + gifObject.images.fixed_height.url + '" class="thumbnail"><img src="' + gifObject.images.fixed_height.url + '"img></a></div>';
          if (index === 3 || (index + 1)%4 === 0 || index === (gifsArray.length - 1)) {
            html += '</div>';
            $('.row.gifs').append(html);
            html = '';
            console.log(html);
          }
        });
      })
      .fail(function(){
        console.log('error');
      });
    lastRequest = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
    gifCount = 25;
  });

  $('button#load').on('click', function(e){
    e.preventDefault();
    $.get(lastRequest + '&offset=' + gifCount)
      .done(function(data){
        var gifsArray = data.data;
        var html = '';
        $.each(gifsArray, function(index, gifObject){
          if (index === 0 || index %4 === 0) {
            html += '<div class="row">';
          }
          html += '<div class="col-xs-6 col-md-3"><a href="' + gifObject.images.fixed_height.url + '" class="thumbnail"><img src="' + gifObject.images.fixed_height.url + '"img></a></div>';
          if (index === 3 || (index + 1)%4 === 0 || index === (gifsArray.length - 1)) {
            html += '</div>';
            $('.row.gifs').append(html);
            html = '';
            console.log(html);
          }
        });
      })
      .fail(function(){
        console.log('error');
      });
    gifCount += 25;
  });

};

$(start);
