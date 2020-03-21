let countCLick = 1
$(document).ready(function(event) {
    
    
$(".photo-name").on('click', function(){
    event.preventDefault;
    event.stopPropagation;
    if (countCLick == 1) {
 $(".informations").removeClass('hidden'); 
  $('.photo-name').html('Close window').css('color', '#a0b5d9');
   countCLick = 2;
    }else {
        $(".informations").addClass('hidden'); 
        $('.photo-name').html('Hamza Bouthour').css('color', 'white');;
        countCLick = 1;
    }
});
// $(document).on('click', 'body *', function(){
//     if (countCLick == 2) {
//     $(".informations").addClass('hidden'); 
//     countCLick = 1;
//     }
    
// });

});