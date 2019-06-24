$(document).ready(function() {
  const menus = [
    {
      id: 'dashboard-menu-choferes',
      collapse: 'dropdown-choferes'
    },
    {
      id: 'dashboard-menu-panama',
      collapse: 'dropdown-panama'
    },
    {
      id: 'dashboard-menu-usuarios',
      collapse: 'dropdown-usuarios'
    },
    {
      id: 'dashboard-menu-empresas',
      collapse: 'dropdown-empresas'
    }
  ];
  menus.map(menu => {
    $(`#${menu.id}`).focusout(function() {
      $(`#${menu.collapse}`).collapse('hide');
    });
    $(`#${menu.collapse}`).on('show.bs.collapse', function() {
      //   let parent = e.target.dataset.parent;
      $(`#${menu.id}`).addClass('dashboard-menu-item-active');
    });
    $(`#${menu.collapse}`).on('hide.bs.collapse', function() {
      //   let parent = e.target.dataset.parent;
      $(`#${menu.id}`).removeClass('dashboard-menu-item-active');
    });
  });

  //   $('#dashboard-menu-choferes').focusout(function() {
  //     $('#dropdown-choferes').collapse('hide');
  //   });
  //   $('#dashboard-menu-panama').focusout(function() {
  //     $('#dropdown-panama').collapse('hide');
  //   });

  //   $('#dropdown-choferes').on('show.bs.collapse', function(e) {
  //     let parent = e.target.dataset.parent;
  //     $(`${parent}`).addClass('dashboard-menu-item-active');
  //   });
  //   $('#dropdown-choferes').on('hide.bs.collapse', function(e) {
  //     let parent = e.target.dataset.parent;
  //     $(`${parent}`).removeClass('dashboard-menu-item-active');
  //   });
});
