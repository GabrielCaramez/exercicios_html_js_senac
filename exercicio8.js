function calcularSoma(){
    const numero1 = (document.getElementById("numero1").valueAsNumber);
    const numero2 = (document.getElementById("numero2").valueAsNumber);

    if(isNaN(numero1) || isNaN(numero2)){
        alert("Digite um número válido");
        return;
    }

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 !== 0 ? numero1 / numero2 : "Divisão por zero";
    const resto = numero2 !== 0 ? numero1 % numero2 : "Divisão por zero";
    const quadrado1 = numero1 ** 2;
    const quadrado2 = numero2 ** 2;
    const imc = numero2 !== 0 ? numero1 / (numero2 ** 2) : "Divisão por zero";
    const triangulo = (numero1 * numero2) / 2;
    
    document.getElementById("soma").textContent = soma;
    document.getElementById("subtracao").textContent = subtracao;
    document.getElementById("multiplicacao").textContent = multiplicacao;
    document.getElementById("divisao").textContent = divisao;
    document.getElementById("resto").textContent = resto;
    document.getElementById("quadrado1").textContent = quadrado1;
    document.getElementById("quadrado2").textContent = quadrado2;
    document.getElementById("imc").textContent = imc;
    document.getElementById("triangulo").textContent = triangulo;

    document.getElementById("resultado").style.display = "block";
}
