function timePhp(){
  $.ajax({
    url: 'time.php',
    success: function(currentTime){
      $('h2.time').html(currentTime);
    }
  });
}

setInterval(timePhp, 1000);