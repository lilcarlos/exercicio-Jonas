let nomeMed = document.getElementById("inputMedico");

let nomePac = document.getElementById("inputNomePac")
let cpfPac = document.getElementById("inputCpfPac")


cpfPac.addEventListener("keyup", () => {


    if(isNaN(inputCpfPac.value)){
        inputCpfPac.value = inputCpfPac.value.substring(0,(inputCpfPac.value.length -1))
    }

    if (inputCpfPac.value.length > 11) {
        inputCpfPac.value = inputCpfPac.value.substring(0,11)
    }
    

})




