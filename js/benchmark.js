//Parte dinâmica da página "Benchmark"
var variacaoPercentualTotalPaulinho = 40;
var bolinhaCardTotalPaulinho = document.getElementById("bolinhaCardTotalPaulinho");
var imagemCardTotalPaulinho = document.getElementById("imagemCardTotalPaulinho");
var textoCardTotalPaulinho = document.getElementById("textoCardTotalPaulinho");

if (variacaoPercentualTotalPaulinho > 0){
    bolinhaCardTotalPaulinho.style.backgroundColor = "#c3f8c8";
    imagemCardTotalPaulinho.src = "../assets/icons/Seta_Cima.svg";
    textoCardTotalPaulinho.textContent = variacaoPercentualTotalPaulinho + "% a mais do que na semana anterior."
  }
  else if (variacaoPercentualTotalPaulinho == 0){
    bolinhaCardTotalPaulinho.style.backgroundColor = "#c7c7c7";
    imagemCardTotalPaulinho.src = "../assets/icons/Sinal_Menos.svg";
    textoCardTotalPaulinho.textContent = "Não houve variação em relação à semana anterior."
  }
  else {
    bolinhaCardTotalPaulinho.style.backgroundColor = "#ffb5b5";
    imagemCardTotalPaulinho.src = "../assets/icons/Seta_Baixo.svg";
    textoCardTotalPaulinho.textContent = variacaoPercentualTotalPaulinho.toString().split("-").pop() + "% a menos do que na semana anterior."
  }

var variacaoPercentualTotalCarlos = -12;
var bolinhaCardTotalCarlos = document.getElementById("bolinhaCardTotalCarlos");
var imagemCardTotalCarlos = document.getElementById("imagemCardTotalCarlos");
var textoCardTotalCarlos = document.getElementById("textoCardTotalCarlos");

if (variacaoPercentualTotalCarlos > 0){
    bolinhaCardTotalCarlos.style.backgroundColor = "#c3f8c8";
    imagemCardTotalCarlos.src = "../assets/icons/Seta_Cima.svg";
    textoCardTotalCarlos.textContent = variacaoPercentualTotalCarlos + "% a mais do que na semana anterior."
  }
  else if (variacaoPercentualTotalCarlos == 0){
    bolinhaCardTotalCarlos.style.backgroundColor = "#c7c7c7";
    imagemCardTotalCarlos.src = "../assets/icons/Sinal_Menos.svg";
    textoCardTotalCarlos.textContent = "Não houve variação em relação à semana anterior."
  }
  else {
    bolinhaCardTotalCarlos.style.backgroundColor = "#ffb5b5";
    imagemCardTotalCarlos.src = "../assets/icons/Seta_Baixo.svg";
    textoCardTotalCarlos.textContent = variacaoPercentualTotalCarlos.toString().split("-").pop() + "% a menos do que na semana anterior."
  }

var variacaoPercentualTotalNatalia = 0;
var bolinhaCardTotalNatalia = document.getElementById("bolinhaCardTotalNatalia");
var imagemCardTotalNatalia = document.getElementById("imagemCardTotalNatalia");
var textoCardTotalNatalia = document.getElementById("textoCardTotalNatalia");

if (variacaoPercentualTotalNatalia > 0){
    bolinhaCardTotalNatalia.style.backgroundColor = "#c3f8c8";
    imagemCardTotalNatalia.src = "../assets/icons/Seta_Cima.svg";
    textoCardTotalNatalia.textContent = variacaoPercentualTotalNatalia + "% a mais do que na semana anterior."
  }
  else if (variacaoPercentualTotalNatalia == 0){
    bolinhaCardTotalNatalia.style.backgroundColor = "#c7c7c7";
    imagemCardTotalNatalia.src = "../assets/icons/Sinal_Menos.svg";
    textoCardTotalNatalia.textContent = "Não houve variação em relação à semana anterior."
  }
  else {
    bolinhaCardTotalNatalia.style.backgroundColor = "#ffb5b5";
    imagemCardTotalNatalia.src = "../assets/icons/Seta_Baixo.svg";
    textoCardTotalNatalia.textContent = variacaoPercentualTotalNatalia.toString().split("-").pop() + "% a menos do que na semana anterior."
  }