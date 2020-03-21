let countCLick = 1
$(document).ready(function(event) {
    event.preventDefault;
    event.stopPropagation;
    
$(".photo-name").on('click', function(){
    if (countCLick == 1) {
 $(".informations").removeClass('hidden');  
   countCLick = 2;
    }else {
        $(".informations").addClass('hidden'); 
        countCLick = 1;
    }
});

});