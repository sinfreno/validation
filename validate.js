// VALIDACIÓN BUSCADOR

const formSearch = document.getElementById('formSearch');


function validateSearch() {

	let acumErrores = 0;
    formSearch.classList.remove('is-invalid');
    var x = document.forms["searchForm"]['fname'];

    if (x.value == "") {
        x.classList.add("is-invalid");
	    document.getElementById("errorSearch").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }
    else if(x.value.length < 3){
        x.classList.add("is-invalid");
	    document.getElementById("errorSearch").textContent = "Se necesitan 3 caracteres para realizar la busqueda";
        acumErrores ++;
    }
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
  }

  formSearch.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

// VALIDACIÓN LOGIN

const formLog = document.getElementById('FormLog');

function validateLogin() {
	
	let acumErrores = 0;
	formLog.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	let email = document.getElementById('email');
    let password = document.forms["myFormLog"]["pwd"];



	if(email.value == "") {
		email.classList.add("is-invalid");
		document.getElementById("errorEmailLog").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(email.value)){
		email.classList.add("is-invalid");
		document.getElementById("errorEmailLog").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(password.value == "") {
		password.classList.add("is-invalid");
		document.getElementById("errorPwdLog").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}else if( password.value.length < 8){
		password.classList.add("is-invalid");
		document.getElementById("errorPwdLog").textContent = "Este campo ha de contener como mínimo 8 caracteres";
		acumErrores ++;
	}else if(!tiene_mayusculas(password.value)){
		password.classList.add("is-invalid");
		document.getElementById("errorPwdLog").textContent = "Este campo ha de contener mínimo una mayuscula";
		acumErrores ++;
	}else if(!tiene_numeros(password.value)){
		password.classList.add("is-invalid");
		document.getElementById("errorPwdLog").textContent = "Este campo ha de contener mínimo una letra";
		acumErrores ++;
	}


    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

formLog.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);



// VALIDACIÓN REGISTRO

const form = document.getElementById('myFormId');

function registerValidate() {
	
	let acumErrores = 0;
	form.classList.remove('is-invalid');
	let inputEmail = document.forms["myForm"]["inputEmail"];
    let inputPassword = document.forms["myForm"]["inputPassword"];
    let inputRePassword = document.forms["myForm"]["inputRePassword"];
    let inputProvince = document.forms["myForm"]["inputProvince"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrores ++;
    }else if( inputPassword.value.length < 8){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo ha de contener como mínimo 8 caracteres";
		acumErrores ++;
	}else if(!tiene_mayusculas(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo ha de contener mínimo una mayuscula";
		acumErrores ++;
	}else if(!tiene_numeros(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo ha de contener mínimo una letra";
		acumErrores ++;
	}

    // Si la contraseña no coincide tampoco se envía el formulario
    if(inputRePassword.value == "" || inputRePassword.value != inputPassword.value) {
        inputRePassword.classList.add("is-invalid");
        if(inputRePassword.value == "" ){
            document.getElementById("errorRePassword").textContent = "Este campo es obligatorio";
        }
        else{
        document.getElementById("errorRePassword").textContent = "Las contraseñas no coinciden";
        }
		acumErrores ++;
    }
	

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

// Elimina el in-invalid cuando se rellena correctamente un campo

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

// Verifica que un email esté escrito de forma correta

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

function tiene_mayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

var numeros="0123456789";

function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

