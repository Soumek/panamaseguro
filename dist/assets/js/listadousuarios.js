$(document).ready(function() {
  $("#table-1").DataTable({
    dom:
      '<"row"<"col-md-6"l><"col-md-6"f>><"col-md-12"t><"row paginacion"<"col-md-6 col-12"i><"col-md-6  col-12"p>>',
    responsive: true,
    scrollY: "300px",
    scrollCollapse: true,
    language: idioma_espanol
  });
  $("#nuevo-usuario-btn").click(function() {
    $("#listado-usuarios-table").slideUp();
    $("#listado-usuarios-form").slideDown();
  });
  $("#table-usuarios-btn").click(function() {
    $("#listado-usuarios-form").slideUp();
    $("#listado-usuarios-table").slideDown();
  });
  $("#table-usuarios-edit-btn").click(function() {
    $("#listado-usuarios-edit").slideUp();
    $("#listado-usuarios-table").slideDown();
  });
  $("#table-1 tbody").on("click", "button.edit", function() {
    $("#nombreusuario").val("José Antonio Ramos Zoto");
    $("#correousuario").val("mv.disegn@gmail.com");
    $("#telefonousuario").val("3924699");
    $("#tlf2usuario").val("46433521");
    $("#direccionusuario").val("Barrio las Lomas, la chorrera");
    $("#listado-usuarios-table").slideUp();
    $("#listado-usuarios-edit").slideDown();
  });

  $(".dropify").dropify({
    messages: {
      default: "Arrastra y suelta el archivo aquí o haz click...",
      replace: "Arrastra y suelta el archivo para reemplazarlo",
      remove: "Remover",
      error: "Ooops, algo salió mal."
    },
    error: {
      fileSize: "El tamaño del archivo es muy grande, máximo ({{ value }}).",
      minWidth: "El ancho de la imagen es muy pequeño ({{ value }}}px mínimo).",
      maxWidth: "El ancho de la imagen es muy grande ({{ value }}}px máximo).",
      minHeight:
        "La altura de la imagen es muy pequeña ({{ value }}}px mínimo).",
      maxHeight: "La altura de la imagen es muy grande ({{ value }}px máximo).",
      imageFormat:
        "Este formato de imagen no está permitido, solamente ({{ value }})."
    }
  });
});
