$(document).ready(function() {
  const table = $('#table-1').DataTable({
    dom:
      '<"row"<"col-md-12"t><"row paginacion"<"col-md-6 col-12"i><"col-md-6 col-12"p>>>',
    responsive: true,
    scrollY: '300px',
    language: idioma_espanol
  });

  $('#datepicker-autoclose').datepicker({
    autoclose: true,
    todayHighlight: true,
    language: 'es'
  });

  $('#nueva-empresa-btn').click(function() {
    $('#empresas-registradas-table').slideUp();
    $('#nueva-empresa-form').slideDown();
  });

  $('#empresas-registradas-btn').click(function() {
    $('#nueva-empresa-form').slideUp();
    $('#empresas-registradas-table').slideDown();
  });
  $('#empresas-registradas-edit-btn').click(function() {
    $('#editar-empresa-form').slideUp();
    $('#empresas-registradas-table').slideDown();
  });

  $('#table-1 tbody').on('click', 'button.edit', function() {
    $('#nombreempresa').val('Taxi la Grulla');
    $('#nombredueño').val('Marcos Vidal');
    $('#tlfdueño').val('4245373449');
    $('#correoempresa').val('marcoseead@gmail.com');
    $('#tlfempresa').val('4245373449');
    $('#tlf2').val('4245373449');
    $('#direccionempresa').text('La Chorerra');
    $('#empresas-registradas-table').slideUp();
    $('#editar-empresa-form').slideDown();
  });

  $('#editar-empresa-form').on('submit', function(e) {
    e.preventDefault();
  });
  $('#nueva-empresa-form').on('submit', function(e) {
    e.preventDefault();
  });
});
