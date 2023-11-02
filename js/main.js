const autorized = ["percollamarco8@gmail.com", "redmallardai@gmail.com", "percollamarco@virgilio.it", "a@"];
const nonono = [">", "<", "/"];
const welcomeMessage = document.getElementById("container");
const autorizedZone = document.getElementById("passValid")
const dadiBtn = document.getElementById("lancia");
const checkBtn = document.getElementById("getMail");
const primoDado = document.getElementById("mioDado");
const secondoDado = document.getElementById("againstDado");
const result = document.getElementById("result");
const loginZone = document.getElementById("loginZone")



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
                    welcomeMessage.innerHTML = ` benvenuto :  ${mailCheck} `;
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
    primoDado.innerHTML = `il tuo dado vale: ${primoNumero} `;
    secondoDado.innerHTML = `il dado avversario vale: ${secondoNumero} `;

    if (primoNumero == secondoNumero) {
        result.innerHTML = `Pari`

    } else if (primoNumero < secondoNumero) {
        result.innerHTML = `Hai perso`

    } else if (primoNumero > secondoNumero) {
        result.innerHTML = `hai vinto`
    }
})



