
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

$("#myModal").on('shown.bs.modal', function () {
  myInput.focus()
});

jQuery(document).ready(function($) {
    //$("input[name='shippingfield[674b7be2-4b4f-4ad7-85cb-efdc8e15d2ab][value]']").mask("+7(999) 999-9999",{placeholder:"_"});
    $("input[name='form[tell]']").mask("+7 (999) 999-99-99");
});	