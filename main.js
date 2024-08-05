let nome;

nome = window.prompt("Olá, quem gostaria de acessar o site?");

console.log(nome);

document.getElementById("welcome").textContent = `Olá, seja bem vindo! ${nome}`;