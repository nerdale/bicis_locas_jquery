
function validateForm(){
	//name validation, empty field and first character uppercase
	function nombre(){
		var nombre = $('#name').val();
		if (nombre === null || nombre.length === 0){
			$('.name-container').append('<span>¡Error! El campo nombre no debe estar vacío</span>'); //llamo a la clase del contenedor y le paso el span con el texto
			return false;
		}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
			$('.name-container').append('<span>¡Error! El primer caracter del campo nombre debe ser mayúscula</span>');
			return false;
		}else if( /[0-9]/.test(nombre)){ 
			$('.name-container').append('<span>¡Error! Sólo debe ingresar letras en el campo nombre</span>');
			return false;
		}else{
			return true;
		}
	}
	nombre();

	function apellido(){
	var apellido = $('#lastname').val();
		if (apellido === null || apellido.length === 0){
			$('.lastname-container').append('<span>¡Error! El campo apellido no debe estar vacío</span>'); //llamo a la clase del contenedor y le paso el span con el texto
			return false;
		}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			$('.lastname-container').append('<span>¡Error! El primer caracter del campo apellido debe ser mayúscula</span>');
			return false;
		}else if( /[0-9]/.test(apellido)){
			$('.lastname-container').append('<span>¡Error! Sólo debe ingresar letras en el campo apellido</span>');
			return false;
		}else{
			return true;
		}
	}	
	apellido();

	function correo(){
		var correo = $('#input-email').val();
		var verificar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		if( correo === null || correo.length === 0){
			$('.email-container').append('<span>¡Error! El campo correo no debe estar vacío'); //llamo a la clase del contenedor y le paso el span con el texto
			return false;
		}else if (verificar.test(correo)){
			return true;
		}else{
			$('.email-container').append('<span>¡Error! El correo es incorrecto, por favor ingrese un dato válido');
			return false;
		}				
	}
	correo();

	function password(){
		var contrasenia = $('#input-password').val();
		if(contrasenia === null || contrasenia.length === 0){
			$('.form-group:eq(0)').append('<span>¡Error! El campo password no debe estar vacío</span>'); //llamo a la clase del contenedor y su posición, le paso el span con el texto
			return false;
		}else if (contrasenia.length < 6 ) {
			$('.form-group:eq(0)').append('<span>¡Error! La contraseña debe tener al menos 6 caracteres</span>');
			return false;
		}else if(contrasenia === 'password' || contrasenia === '123456' || contrasenia === '098754'){
			$('.form-group:eq(0)').append('<span>¡Error! Contraseña inválida</span>');
			return false;			
		}else{
			return true;
		}
	}
	password();

	function lista(){
		var seleccion = $('select').val();
		if(seleccion == 0){
			$('.form-group:eq(1)').append('<span>¡Error! Debe seleccionar una opción</span>'); //llamo a la clase del contenedor y su posición, le paso el span con el texto
			return false;
		}
	}
	lista();
}
