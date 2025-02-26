function calcularAssociado(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var carteira = document.getElementById("carteira").value; // Updated to get value from dropdown
    var resultado = document.getElementById("resultado");

    if(nome === ""){
        resultado.innerHTML = "Por favor, digite o nome do associado";
        resultado.style.color = "red";
        return;
    }

    var taxa;
    if(idade < 10){
        taxa = 50.00;
    }else if(idade >= 10){
        taxa = 20.00;
    }else if(idade > 50){
        taxa = 15.00;
    }else if(idade >= 60){
        taxa = 10.00;
    }else if(carteira === "ouro"){
        taxa = 1.3 / idade;
    }else if(carteira === "prata"){
        taxa = 1.4 / idade;
    }else if(carteira === "bronze"){
        taxa = 1.5 / idade;
    }else if(carteira === "platinum"){
        taxa = 1.2 / idade;
    }

    resultado.innerHTML = nome + " pagará R$ " + taxa + " de taxa";
    resultado.style.color = "green";
}