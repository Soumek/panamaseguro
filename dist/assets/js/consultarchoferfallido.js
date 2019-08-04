$(document).ready(function() {
  $('.consultar-chofer-btn-contratado').on('click', function() {
    $('.consultar-chofer-btn-contratado').addClass('animated swing');
    // $('#icon-contratado').removeClass('ti-check');
    // $('#icon-contratado').addClass('ti-close');
    $('.consultar-chofer-btn-contratado').toggleClass(
      'contratado nocontratado'
    );
    $('.icon-contratado').toggleClass('ti-check ti-close');
    setTimeout(() => {
      $('.consultar-chofer-btn-contratado').removeClass('animated swing');
    }, 500);
  });

  var table = $('#table-1').DataTable({
    dom: '<t>',
    responsive: true,
    scrollY: '200px',
    scrollCollapse: true,
    language: idioma_espanol
  });
  var table2 = $('#table-2').DataTable({
    dom: '<t>',
    responsive: true,
    scrollY: '200px',
    scrollCollapse: true,
    language: idioma_espanol
  });

  $('#consultarform').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://127.0.0.1:5500/dist/assets/data/consultarchofer.jon',
      method: 'GET',
      beforeSend: function() {
        $('#consultar-chofer-form').slideUp('slow');
        $('#consultar-chofer-spinner').slideDown('slow');
      },
      error: function() {
        setTimeout(function() {
          $('#consultar-chofer-spinner').hide();
          $('#consultar-chofer-noregistrado').slideDown('slow');
        }, 500);
      },
      success: function(data) {
        setTimeout(function() {
          $('#consultar-chofer-spinner').hide();
          $('#consultar-chofer-data').fadeIn('slow');
          table.columns.adjust().draw();
          table2.columns.adjust().draw();
        }, 500);
      }
    });
  });
  $('#consultar-chofer-registrar-btn').click(function() {
    $('#consultar-chofer-noregistrado').slideUp('slow');
    $('#consultar-chofer-registrar').slideDown('slow');
  });
  $('#consultar-chofer-registrar-btn-volver').click(function() {
    $('#consultar-chofer-registrar').slideUp('slow');
    $('#consultar-chofer-form').slideDown('slow');
  });
  $('#consultar-chofer-noregistrado-btn-volver').click(function() {
    $('#consultar-chofer-noregistrado').slideUp('slow');
    $('#consultar-chofer-form').slideDown('slow');
  });

  for (let index = 0; index < $('.consultar-chofer-reporte').length; index++) {
    $(`#reporte${index + 1}`).on('show.bs.collapse', function() {
      $(`#reporte-btn${index + 1} i`).removeClass('ti-arrow-right');
      $(`#reporte-btn${index + 1} i`).addClass('ti-arrow-down');
    });

    $(`#reporte${index + 1}`).on('hide.bs.collapse', function() {
      $(`#reporte-btn${index + 1} i`).removeClass('ti-arrow-down');
      $(`#reporte-btn${index + 1} i`).addClass('ti-arrow-right');
    });
  }
});
