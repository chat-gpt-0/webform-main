var cadForm = document.getElementById("cad-usuario-form");

cadForm.addEventListener("submit", (e) =>{

    e.preventDefault();

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;

    let usuarios = new Array();

    if(localStorage.hasOwnProperty("usuarios")){

        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push({firstname: firstname, lastname: lastname, email: email, number: number, password: password});

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " +
         firstname + "<br>Sobrenome: " + lastname +  + "<br>E-mail: " + email + 
         + "<br>Celular: " + number + + "<br>Senha: " + password + "<br><hr>"
    );
});