$(document).ready(function() {
  $("#table-1").DataTable({
    dom:
      '<"row"<"col-md-12"l><"col-md-12"t><"row paginacion"<"col-md-6 col-12"i><"col-md-6 col-12"p>>>',
    responsive: true,
    scrollY: "300px",
    scrollCollapse: true,
    language: idioma_espanol
  });
  $("#nuevo-chofer-btn").click(function() {
    $("#dashboard-chofer-table").slideUp();
    $("#dashboard-chofer-form").slideDown();
  });
  $("#table-chofer-btn").click(function() {
    $("#dashboard-chofer-form").slideUp();
    $("#dashboard-chofer-table").slideDown();
  });
  $("#table-chofer-edit-btn").click(function() {
    $("#dashboard-chofer-edit").slideUp();
    $("#dashboard-chofer-table").slideDown();
  });
  $("#table-1 tbody").on("click", "button.edit", function() {
    $("#cedulachofer").val("19070484");
    $("#nombrechofer").val("José Antonio");
    $("#apellidochofer").val("Ramos Zoto");
    $("#tlfchofer").val("4245373449");
    $("#direccionchofer").val("Barrio las Lomas, la chorrera");
    $("#dashboard-chofer-table").slideUp();
    $("#dashboard-chofer-edit").slideDown();
  });
});
