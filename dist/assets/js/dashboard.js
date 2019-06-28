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
