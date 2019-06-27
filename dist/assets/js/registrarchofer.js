$(document).ready(function() {
  $('#btn-contratado').on('click', function() {
    $('#btn-contratado').addClass('animated swing');
    // $('#icon-contratado').removeClass('ti-check');
    // $('#icon-contratado').addClass('ti-close');
    $('#icon-contratado').toggleClass('ti-check ti-close');
    setTimeout(() => {
      $('#btn-contratado').removeClass('animated swing');
    }, 500);
  });
});
