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
    $("#listado-chofer-table").slideUp();
    $("#listado-chofer-form").slideDown();
  });
  $("#table-chofer-btn").click(function() {
    $("#listado-chofer-form").slideUp();
    $("#listado-chofer-table").slideDown();
  });
  $("#table-chofer-edit-btn").click(function() {
    $("#listado-chofer-edit").slideUp();
    $("#listado-chofer-table").slideDown();
  });
  $("#table-1 tbody").on("click", "button.edit", function() {
    $("#cedulachofer").val("19070484");
    $("#nombrechofer").val("José Antonio");
    $("#apellidochofer").val("Ramos Zoto");
    $("#tlfchofer").val("4245373449");
    $("#direccionchofer").val("Barrio las Lomas, la chorrera");
    $("#listado-chofer-table").slideUp();
    $("#listado-chofer-edit").slideDown();
  });

  $(".listado-chofer-btn-contratado").on("click", function() {
    $(".listado-chofer-btn-contratado").addClass("animated swing");
    // $('#icon-contratado').removeClass('ti-check');
    // $('#icon-contratado').addClass('ti-close');
    $(".listado-chofer-btn-contratado").toggleClass("contratado nocontratado");
    $(".icon-contratado").toggleClass("ti-check ti-close");
    setTimeout(() => {
      $(".listado-chofer-btn-contratado").removeClass("animated swing");
    }, 500);
  });
});
