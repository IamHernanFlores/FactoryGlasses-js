
(async() => {

	const {value: pais} = await Swal.fire({
	//	title: 'Bienvenido',
	//	text: 'Selecciona tu pais',
		// icon: 'info',
		input: 'select',
		inputPlaceholder: 'Pais',
	   inputValue: '',
	   inputOptions: {
		argentina: 'Argentina',
		mexico: 'Mexico',
		españa: 'España',
		Americalatina: 'America Latina',
		EEUU: 'EE.UU',
		europa: 'Europa',
	   },
	 showConfirmButton: true,
	 confirmButtonColor: '#3E60E9',
	 confirmButtonAriaLabel: 'Confirmar',

	 showCancelButton: true,
	 cancelButtonText: 'Cancelar',
	 //cancelButtonColor:
	 cancelButtonAriaLabel: 'Cancelar',
	
	 buttonsStyling: true,
	 showCloseButton: true, 
	 closeButtonAriaLabel: 'Cerrar alerta',
	 background: ' linear-gradient(90deg, rgba(131,58,180,1) 0%,rgba(213,38,79,1) 52%, rgba(227,35,62,1) 68%, rgba(252,176,69,1) 97%)',
	// imageUrl: 'img/4.png',
	 html: '<h3>👋 Bienvenid@ 🕶</h3>, <img class="imagen1" src="assets/img/lentes2.jpeg" alt="camara de fotografia">, <h6>Selecciona tu localizacion 🌎</h6>',
	// imageWidth: '200px',
    // imageHeight:
	// imageAlt: 'camara de fotografia'
	   
	});

	if (pais){
			Swal.fire ({
				text: `Seleccionaste ${pais}`,
				position: 'bottom',
				icon: 'success',
		     // confirmButtonText: 'Acepto',
			// footer: "Anuncio",
			// width: '300px',
				padding: '1rem',
				grow: 'row',
				backdrop: true,
				timer: 3000,
				timerProgressBar: true, 
				toast: true,
				allowOutsideClick: false,
				allowEscapeKey: false,
				stopKeydownPropagation: false,
				showConfirmButton: false,
				showCancelButton: false,
				showCloseButton: false,
				closeButtonAriaLabel: 'Cerrar esta alerta',

				customClass: {
					content: 'content-class'
				}
					});
				}

})()

