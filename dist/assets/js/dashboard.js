$(document).ready(function() {
  const menus = [
    {
      id: 'dashboard-menu-choferes',
      active: 'dropdown-choferes'
    },
    {
      id: 'dashboard-menu-panama',
      active: 'dropdown-panama'
    },
    {
      id: 'dashboard-menu-usuarios',
      active: 'dropdown-usuarios'
    },
    {
      id: 'dashboard-menu-empresas',
      active: 'dropdown-empresas'
    }
  ];
  menus.map(menu => {
    $(`#${menu.id}`).on('show.bs.dropdown', function() {
      $(`#${menu.active}`).addClass('dashboard-menu-item-active');
    });

    $(`#${menu.id}`).on('hide.bs.dropdown', function() {
      $(`#${menu.active}`).removeClass('dashboard-menu-item-active');
    });
  });
});

//Configuración de idioma para los datatables
var idioma_espanol = {
  sProcessing: 'Procesando...',
  sLengthMenu: 'Mostrar _MENU_ registros',
  sZeroRecords: 'No se encontraron resultados',
  sEmptyTable: 'Ningún dato disponible en esta tabla',
  sInfo:
    'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
  sInfoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
  sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
  sInfoPostFix: '',
  sSearch: 'Buscar:',
  sUrl: '',
  sInfoThousands: ',',
  sLoadingRecords: 'Cargando...',
  oPaginate: {
    sFirst: 'Primero',
    sLast: 'Último',
    sNext: 'Siguiente',
    sPrevious: 'Anterior'
  },
  oAria: {
    sSortAscending: ': Activar para ordenar la columna de manera ascendente',
    sSortDescending: ': Activar para ordenar la columna de manera descendente'
  }
};
