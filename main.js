$('#myform').submit(function(e){
  e.preventDefault();
  var str = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: 'hello.php',
    data: str,
    success: function(data){
      $('#result').html(data);
    }
  });
});
