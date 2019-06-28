$(document).ready(function() {
  const menus = [
    {
      id: 'dashboard-menu-choferes',
      dropdown: 'dropdown-choferes'
    },
    {
      id: 'dashboard-menu-panama',
      dropdown: 'dropdown-panama'
    },
    {
      id: 'dashboard-menu-usuarios',
      dropdown: 'dropdown-usuarios'
    },
    {
      id: 'dashboard-menu-empresas',
      dropdown: 'dropdown-empresas'
    }
  ];
  menus.map(menu => {
    $(`#${menu.dropdown}`).on('show.bs.dropdown', function() {
      $(`#${menu.id}`).addClass('dashboard-menu-item-active');
    });

    $(`#${menu.dropdown}`).on('hide.bs.dropdown', function() {
      $(`#${menu.id}`).removeClass('dashboard-menu-item-active');
    });
  });
});
