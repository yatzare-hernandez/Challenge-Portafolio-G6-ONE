
function validarNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre === '') {
        mostrarError('nombre', 'Este campo es obligatorio');
        return false;
    }
    return true;
}

function validarEmail() {
    const email = document.getElementById('email').value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mostrarError('email', 'Por favor, ingrese un correo electrónico válido');
        return false;
    }
    return true;
}

function validarAsunto() {
    const asunto = document.getElementById('asunto').value.trim();
    if (asunto === '') {
        mostrarError('asunto', 'Este campo es obligatorio');
        return false;
    }
    return true;
}

function validarMensaje() {
    const mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje === '') {
        mostrarError('mensaje', 'Este campo es obligatorio');
        return false;
    }
    return true;
}


function mostrarError(campo, mensaje) {
    const elemento = document.querySelector(`#${campo} + .input-message-error`);
    if (elemento) {
        elemento.textContent = mensaje;
        elemento.style.display = 'block';
    }
}


function limpiarErrores() {
    const mensajesError = document.querySelectorAll('.input-message-error');
    mensajesError.forEach(mensaje => {
        mensaje.textContent = '';
        mensaje.style.display = 'none';
    });
}


function validarFormulario(event) {
    event.preventDefault(); 

    limpiarErrores(); // 

    
    const esNombreValido = validarNombre();
    const esEmailValido = validarEmail();
    const esAsuntoValido = validarAsunto();
    const esMensajeValido = validarMensaje();

   
    if (esNombreValido && esEmailValido && esAsuntoValido && esMensajeValido) {
       
        console.log('Formulario válido. Enviar datos...');
        document.getElementById('formulario').submit(); 
    } else {
        console.log('Formulario inválido. Por favor, corrija los errores.');
    }
}


document.getElementById('formulario').addEventListener('submit', validarFormulario);
