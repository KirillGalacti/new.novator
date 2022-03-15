$(document).ready(function () {
  
  $(".second_div").hide();
  $(".third_div").hide();
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

const hover_base = document.querySelectorAll('.hover_base');
const imgParent_base = document.querySelectorAll('.img-parent_base');

hover_base.forEach((s, i) => {
  s.addEventListener('mouseenter', () => {
    hover_base.forEach((s, i) => {
      imgParent_base[i].classList.remove('z');
    })
    imgParent_base[i].classList.add('z');

  });
});

const hover_standart = document.querySelectorAll('.hover_standart');
const imgParent_standart = document.querySelectorAll('.img-parent_standart');

hover_standart.forEach((s, i) => {
  s.addEventListener('mouseenter', () => {
    hover_standart.forEach((s, i) => {
      imgParent_standart[i].classList.remove('z');
    })
    imgParent_standart[i].classList.add('z');

  });
});

const hover_expert = document.querySelectorAll('.hover_expert');
const imgParent_expert = document.querySelectorAll('.img-parent_expert');

hover_expert.forEach((s, i) => {
  s.addEventListener('mouseenter', () => {
    hover_expert.forEach((s, i) => {
      imgParent_expert[i].classList.remove('z');
    })
    imgParent_expert[i].classList.add('z');

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

