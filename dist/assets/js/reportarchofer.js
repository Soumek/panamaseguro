$(document).ready(function() {
  $('#reporte-lote-btn').click(function() {
    $('#reporte-normal').slideUp();
    $('#reporte-lote').slideDown();
  });
  $('.dropify').dropify({
    messages: {
      default: 'Arrastra y suelta el archivo aquí o haz click...',
      replace: 'Arrastra y suelta el archivo para reemplazarlo',
      remove: 'Remover',
      error: 'Ooops, algo salió mal.'
    },
    error: {
      fileSize: 'El tamaño del archivo es muy grande, máximo ({{ value }}).',
      minWidth: 'El ancho de la imagen es muy pequeño ({{ value }}}px mínimo).',
      maxWidth: 'El ancho de la imagen es muy grande ({{ value }}}px máximo).',
      minHeight:
        'La altura de la imagen es muy pequeña ({{ value }}}px mínimo).',
      maxHeight: 'La altura de la imagen es muy grande ({{ value }}px máximo).',
      imageFormat:
        'Este formato de imagen no está permitido, solamente ({{ value }}).'
    }
  });

  $('#reporte-normal-btn').click(function() {
    $('#reporte-lote').slideUp();
    $('#reporte-normal').slideDown();
  });
  //   $("#empresas-registradas-edit-btn").click(function() {
  //     $("#editar-empresa-form").slideUp();
  //     $("#empresas-registradas-table").slideDown();
  //   });

  // $('#editar-empresa-form').on('submit', function(e) {
  //   e.preventDefault();
  // });
  // $('#nueva-empresa-form').on('submit', function(e) {
  //   e.preventDefault();
  // });
});
