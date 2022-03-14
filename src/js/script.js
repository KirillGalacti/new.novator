$(document).ready(function () {
  $(".second_div").hide();
       $(".btn_1").click(function () {
           $(".first_div").show();
           $(".second_div").hide()
           $(".third_div").hide()
       });
     $(".btn_2").click(function () {
           $(".second_div").show();
           $(".first_div").hide()
           $(".third_div").hide()
   });
    $(".btn_3").click(function () {
      $(".third_div").show()
      $(".second_div").hide();
      $(".first_div").hide()
});
});

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

$("#myModal").on('shown.bs.modal', function () {
  myInput.focus()
});

jQuery(document).ready(function($) {
    //$("input[name='shippingfield[674b7be2-4b4f-4ad7-85cb-efdc8e15d2ab][value]']").mask("+7(999) 999-9999",{placeholder:"_"});
    $("input[name='form[tell]']").mask("+7 (999) 999-99-99");
});	

