function randomPassword(){
    let displayPassword = document.getElementById('display-password');
    let passwordLength = parseInt(document.getElementById('password-length').value);
    let error = document.getElementById('error-info');
    let password = '';
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    //Se o usuário não escolheu o tamanho
    if(passwordLength == 0){
        error.innerHTML = 'Por favor, escolha o tamanho da senha';
        error.style.padding = '10px 15px';

        setTimeout(() => {
            error.innerHTML = '';
        }, 2000);
    }else{
        error.innerHTML = '';
    }
    
    //Gerar senha aleatória
    for(let i = 0; i < passwordLength; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    displayPassword.value = password;
}