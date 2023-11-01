const autorized = [ "percollamarco8@gmail.com", "redmallardai@gmail.com", "percollamarco@virgilio.it" , "a"];
const welcomeMessage = document.getElementById("container");
const autorizedZone = document.getElementById("passValid")
const dadiBtn = document.getElementById("lancia") ;
const checkBtn = document.getElementById("getMail");
const primoDado = document.getElementById("mioDado");
const secondoDado = document.getElementById("againstDado");
const result = document.getElementById("result");




checkBtn.addEventListener( "click" , function() {
    const mailCheck = document.getElementById("mailInput").value ;
    console.log(mailCheck)

    for (let i = 0; i < autorized.length; i++) {
        const mailAutorized = autorized[i];
        
        if (mailAutorized == mailCheck) {
            welcomeMessage.innerHTML = ` benvenuto :  ${mailCheck} `;
            autorizedZone.classList.remove("d-none");
            
            break;
            
        }else  {
            welcomeMessage.innerHTML = ` non puoi accedere :  ${mailCheck} `;
        }
        
    }
});


dadiBtn.addEventListener("click" , function() {
    primoDado.innerHTML = Math.floor(Math.random() * 6);
    secondoDado.innerHTML = Math.floor(Math.random() * 6);

    if (primoDado.innerHTML == secondoDado.innerHTML){
        result.innerHTML = `Pari`

    }else if (primoDado.innerHTML < secondoDado.innerHTML){
        result.innerHTML = `Hai perso`

    }else if (primoDado.innerHTML > secondoDado.innerHTML){
        result.innerHTML = `hai vinto`
    }
})



