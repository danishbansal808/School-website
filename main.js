window.onload = function() {
  var a = ["A","B","C","D","E","F"];
  $('#add').on('click', function() {
    var value = $('input[name=aa]').val();
    a.push(value)
    $('input[name=aa]')[0].value = '';
    console.log(a)
  })
  $('#del').on('click', function() {
    a.splice(2,1)
    console.log(a)
  })
}
