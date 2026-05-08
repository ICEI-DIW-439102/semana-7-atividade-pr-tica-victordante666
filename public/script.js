let nome=prompt("Digite seu nome:");
let renda=0;
while(true){
    renda=parseFloat(prompt("ola " + nome + ", digite sua renda mensal:"));
    if(!isNaN(renda) && renda > 0)break;
    alert("Valor inválido. Por favor, digite um número positivo para a renda.");
    
    }
let qtdDespesas;;
while(true){
    qtdDespesas=Number(prompt("Digite a quantidade de despesas que você tem:"));
    if(!isNaN(qtdDespesas) && qtdDespesas >= 1 && qtdDespesas <= 5)break;
        alert("Quantidade inválida. Por favor, digite um valor entre 1 e 5.");
}


let totalGastos=0;

for(let i=1;i<=qtdDespesas;i++){
    let valor;
    while(true){
        valor=parseFloat(prompt(`Digite o valor da despesa ${i}:`));
        if(!isNaN(valor) && valor >= 0)break;
        alert("Valor inválido. Por favor, digite um número positivo para a despesa.");
    }
    totalGastos+=valor;
}
let saldo=renda-totalGastos;
let menagem;
if(totalGastos>renda){
    menagem="Cuidado! Seus gastos estão ultrapassando sua renda. Considere reduzir algumas despesas para evitar dívidas.";
}else if(saldo >= renda * 0.30){
    menagem="Ótimo! Você está economizando uma boa parte da sua renda. Continue assim para construir uma reserva financeira sólida.";
}else{
    menagem="Seu saldo é exatamente zero. Tente economizar um pouco mais para criar uma reserva financeira.";
}
console.log("nome: " + nome);
console.log("Renda mensal: R$" + renda.toFixed(2));
console.log("Total de gastos: R$" + totalGastos.toFixed(2));
console.log("Saldo final: R$" + saldo.toFixed(2));
console.log("classificação: " + menagem);

alert(
    "Nome: " + nome + "\n" +
    "Renda mensal: R$" + renda.toFixed(2) + "\n" +
    "Total de gastos: R$" + totalGastos.toFixed(2) + "\n" +
    "Saldo final: R$" + saldo.toFixed(2) + "\n" +
    "Classificação: " + menagem
);