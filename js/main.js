const autorized = ["percollamarco8@gmail.com", "redmallardai@gmail.com", "percollamarco@virgilio.it", "a@"];
const nonono = [">", "<", "/"];
const welcomeMessage = document.getElementById("container");
const welcomeMessage2 = document.getElementById("container2");
const autorizedZone = document.getElementById("passValid")
const dadiBtn = document.getElementById("lancia");
const checkBtn = document.getElementById("getMail");
const primoDado = document.getElementById("mioDado");
const secondoDado = document.getElementById("againstDado");
const result = document.getElementById("result");
const loginZone = document.getElementById("loginZone")
const dadoImg1 = document.getElementById("dado1") 
const dadoImg2 = document.getElementById("dado2")


checkBtn.addEventListener("click", function () {

    const mailCheck = document.getElementById("mailInput").value;
    console.log(mailCheck);
    let validation = true;

    for (let ind = 0; ind < nonono.length; ind++) {
        const unautorized = nonono[ind];
        console.log(unautorized);
        if (mailCheck.includes(unautorized)) {
            validation = false;
        }
        

        if (mailCheck != "" && !(mailCheck.includes("@") == false) && (validation == true)) {

            for (let i = 0; i < autorized.length; i++) {
                const mailAutorized = autorized[i];

                if (mailAutorized == mailCheck) {
                    welcomeMessage2.innerHTML = ` benvenuto :  ${mailCheck} `;
                    autorizedZone.classList.remove("d-none");
                    loginZone.classList.add("d-none");

                    break;

                } else {
                    welcomeMessage.innerHTML = ` non puoi accedere :  ${mailCheck} `;
                }

            }

        } else {
            welcomeMessage.innerHTML = `invalid mail`;
        }

    }





});


dadiBtn.addEventListener("click", function () {
    let primoNumero = Math.floor(Math.random() * 6)
    let secondoNumero = Math.floor(Math.random() * 6)
    primoDado.innerHTML = `il tuo dado vale:  `;
    dadoImg1.innerHTML = `${primoNumero}`
    secondoDado.innerHTML = `il dado avversario vale:  `;
    dadoImg2.innerHTML = `${secondoNumero}`

    if (primoNumero == secondoNumero) {
        result.innerHTML = `Pari`;
        result.classList = ("orange");

    } else if (primoNumero < secondoNumero) {
        result.innerHTML = `Hai perso`;
        result.classList = ("red");

    } else if (primoNumero > secondoNumero) {
        result.innerHTML = `hai vinto`;
        result.classList =  ("green");
    }
})



