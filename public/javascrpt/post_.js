
function saveData() {
    const payLoad = JSON.stringify({
      nombreUsuario: NombreField.value,
      primerApellido: ApellidoField.value,
      gamertag: GamertagField.value,
      password: PasswordField.value,
      fecha: FechaField.value,
      emailTutor: EmailTutorField.value
    });
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      result.innerText = xhr.responseText;
      main.style.display = 'none';
      endMessage.style.display = 'block';
    };
    xhr.open('POST', '/api/users/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(payLoad);
  }