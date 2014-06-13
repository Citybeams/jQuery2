  // // this specifies which div to look in #tours, look for buttons "event delegation"
  // $('#tours').on('click', 'button', function(){
  //   // returns the closest data price info when clicked
  //   var vacation = $(this).closest('li');
  //   //looks into the html for that price data added to the element
  //   var amount = vacation
  //   var price = $('<p>From $'+amount+'</p>');
  //   vacation.append(price);
  //   $(this).remove();
  // });


function showTicket(){
    $(this).closest('.confirmation').find('.ticket').slideDown();
  }
  $('.confirmation').on('click', 'button', showTicket);
  $('.confirmation').on('mouseover', 'button', showTicket);


$(document).ready(function(){
  $('.vacation').on('keyup', '.quantity', function(){
    // get the price for the vacation (the + changes to a number)
    var price = +$(this).closest('.vacation').data('price');
    //get the quantity entered
    var quantity = +$(this).val();
    //Set the total to price * quantity
    $('#total').text(price * quantity);
  });
});
