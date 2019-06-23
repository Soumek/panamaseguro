$(document).ready(function() {
  $('.dashboard-menu').focusout(function() {
    $('.dropdown-dashboard-menu').collapse('hide');
  });
  $('.notifications-dropdown-toggle').focusout(function() {
    $('.notifications-dropdown').collapse('hide');
  });
  $('.user-dropdown-toggle').focusout(function() {
    $('.user-dropdown').collapse('hide');
  });
});
