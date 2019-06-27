$(document).ready(function() {
  //   $('#boton').click(function() {
  //     $('#panel').slideUp('slow');
  //   });
  $('#consultarform').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
      url: 'http://127.0.0.1:5500/dist/assets/data/consultarchofer.json',
      method: 'GET',
      beforeSend: function() {
        $('#consultarchofer').slideUp('slow');
        $('#panelcarga').slideDown('slow');
      },
      error: function() {
        setTimeout(function() {
          $('#panelcarga').hide();
          $('#consultarchoferalert').show();
          $('#consultarchofer').slideDown('slow');
        }, 3000);
      },
      success: function(data) {
        const datos = `<div class="col-md-12 col-sm-12 d-flex justify-content-center "><div class="row"><p>Cédula:${
          data.cedula
        } </p><p>Estado:${data.estado}</p></div></div>`;
        $('#paneldatoschofer').append(datos);
        // data.map(datos => {
        //   return `<div class="col-md-12 col-sm-12 d-flex justify-content-center ">
        //      <div class="row">
        //        <div class="col-md-3"><h4>Cédula:${datos.cedula}</h4></div>
        //        <div class="col-md-3"><h4>Teléfonos:</h4></div>
        //        <div class="col-md-3"><h4></h4></div>
        //      </div>
        //    </div>`;
        // });
        setTimeout(function() {
          $('#panelcarga').hide();
          $('#paneldatoschofer').slideDown('slow');
        }, 3000);
      }
    });
    //   .then(function(data) {
    //     $('#panelcarga').hide();
    //     $('#consultarchofer').slideDown('slow');

    //     console.log(data);
    //   });
  });
});
