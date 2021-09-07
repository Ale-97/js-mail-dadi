var email = prompt('Salve, inserisci la tua mail per poter iniziare il gioco');

var listEmail = ["alessio@gmail.com","francesco@tiscali.com"];

listEmail.push(sessionStorage.getItem("dataEmail"));

var check = 0;

for (var i = 0;i < listEmail.length; i++){
    if( listEmail[i] === email){
        alert("Bentornato!");
    }
};   
for(var i = 1; i > check; i++ ){

            if(email == ''){
                   email = prompt("Devi indicare un indirizzo email");
            }
            else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
                {
                    listEmail += ',';
                    listEmail += email;
                     break;
                }
                else {
                     email = prompt('Hai inserito un indirizzo non valido, per favore reinserisci la tua email');

                }
}

sessionStorage.setItem("dataEmail", email);
document.getElementById("myEmail").innerHTML = email;
console.log(email);
console.log(listEmail);
