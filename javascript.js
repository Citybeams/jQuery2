$(document).ready(function(){
  // this specifies which div to look in #tours, look for buttons "event delegation"
  $('#tours').on('click', 'button', function(){
    // returns the closest data price info when clicked
    var vacation = $(this).closest('li');
    //looks into the html for that price data added to the element
    var amount = vacation.data('price');
    var price = $('<p>From $'+amount+'</p>');
    vacation.append(price);
    $(this).remove();
  });
});

