$(document).ready(function() {
  $('#table-1').DataTable({
    dom:
      '<"row"<"col-md-12"t><"row"<"col-md-6 col-12"i><"col-md-6 d-flex justify-content-end col-12"p>>>',
    responsive: true,
    scrollY: '300px',
    language: idioma_espanol
  });

  $('#datepicker-autoclose').datepicker({
    autoclose: true,
    todayHighlight: true,
    language: 'es'
  });
});
