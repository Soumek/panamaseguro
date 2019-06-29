$(document).ready(function() {
  /* =================================================================
		Validation
	================================================================= */

  $('#wizard-validator').wizard({
    templates: {
      buttons: function() {
        var options = this.options;
        return (
          '<div class="clearfix">' +
          '<button class="btn btn-primary" data-target="#' +
          this.id +
          '" data-wizard="back">Atrás</button>' +
          '<button class="btn btn-success f-right" data-target="#' +
          this.id +
          '" data-wizard="next">Siguiente</button>' +
          '<button class="btn btn-success btn-next f-right" data-target="#' +
          this.id +
          '" data-wizard="finish">Enviar</button>' +
          '</div>'
        );
      }
    },
    onInit: function() {
      $('#cambiarcontraseña-form').formValidation({
        framework: 'bootstrap',
        fields: {
          passwordnueva: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              },
              different: {
                field: 'passwordactual',
                message: 'La contraseña no puede ser la misma que la anterior.'
              }
            }
          },
          passwordactual: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              }
            }
          },
          passwordconfirmar: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              },
              identical: {
                field: 'passwordnueva',
                message: 'Las contraseñas no coinciden.'
              }
            }
          },
          nombreempresa: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              }
            }
          },
          nombredueño: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              }
            }
          },
          tlfdueño: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              }
            }
          },
          correoempresa: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              },
              emailAddress: {
                message: 'Por favor ingrese un correo válido.'
              }
            }
          },
          tlfempresa: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              }
            }
          },
          direccionempresa: {
            validators: {
              notEmpty: {
                message: 'Este campo es requerido.'
              }
            }
          }
        }
      });
    },
    validator: function() {
      var fv = $('#cambiarcontraseña-form').data('formValidation');

      var $this = $(this);

      // Validate the container
      fv.validateContainer($this);

      var isValidStep = fv.isValidContainer($this);
      if (isValidStep === false || isValidStep === null) {
        return false;
      }

      return true;
    },
    onFinish: function() {
      $('#validation').submit();
      alert('finish');
    }
  });
});
