$(document).ready(function() {
  $("#table-1").DataTable({
    dom: '<"col-md-12"t><"row paginacion"<"col-md-12 col-12"p>>',
    responsive: true,
    searching: false,
    ordering: true,
    info: false,
    lengthChange: false,
    scrollY: "300px",
    scrollCollapse: true,
    language: idioma_espanol
  });
});
