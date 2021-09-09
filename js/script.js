var od = document.getElementById;
var email = prompt('Salve, inserisci la tua mail per poter iniziare il gioco');

const sleep = (s) => {
    return new Promise(resolve => setTimeout(resolve, (s*1000)))
  }

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


var playerOne = Math.floor(Math.random() * 5) + 1;

var playerTwo = Math.floor(Math.random() * 5) + 1;

document.getElementById("myNumber").innerHTML = 'Il tuo numero è: ' + playerOne;
document.getElementById("computerNumber").innerHTML = 'Il numero del Computer è: ' + playerTwo;

if(myNumber > computerNumber) {
    document.getElementById("winner").innerHTML = 'HAI VINTO!';
}
else{
     document.getElementById("winner").innerHTML = 'HAI PERSO!';
}

sleep(2).then(() => { 
  var startOver = alert('Vuoi risfidare il computer ? ricarica la pagina');
})
