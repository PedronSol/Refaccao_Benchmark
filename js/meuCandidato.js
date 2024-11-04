//Parte dinâmica dos cards da página "Meu Candidato"
var variacaoPercentualTotalPostagens = 40;
var bolinhaCardTotalPostagens = document.getElementById("bolinhaCardTotalPostagens");
var imagemCardTotalPostagens = document.getElementById("imagemCardTotalPostagens");
var textoCardTotalPostagens = document.getElementById("textoCardTotalPostagens");

if (variacaoPercentualTotalPostagens > 0){
  bolinhaCardTotalPostagens.style.backgroundColor = "#c3f8c8";
  imagemCardTotalPostagens.src = "../assets/icons/Seta_Cima.svg";
  textoCardTotalPostagens.textContent = variacaoPercentualTotalPostagens + "% a mais do que na semana anterior."
}
else if (variacaoPercentualTotalPostagens == 0){
  bolinhaCardTotalPostagens.style.backgroundColor = "#c7c7c7";
  imagemCardTotalPostagens.src = "../assets/icons/Sinal_Menos.svg";
  textoCardTotalPostagens.textContent = "Não houve variação em relação à semana anterior."
}
else {
  bolinhaCardTotalPostagens.style.backgroundColor = "#ffb5b5";
  imagemCardTotalPostagens.src = "../assets/icons/Seta_Baixo.svg";
  textoCardTotalPostagens.textContent = variacaoPercentualTotalPostagens.toString().split("-").pop() + "% a menos do que na semana anterior."
}

var variacaoPercentualPostagensDesconstrutivas = -60;
var bolinhaCardPostagensDesconstrutivas = document.getElementById("bolinhaCardPostagensDesconstrutivas");
var imagemCardPostagensDesconstrutivas = document.getElementById("imagemCardPostagensDesconstrutivas");
var textoCardPostagensDesconstrutivas = document.getElementById("textoCardPostagensDesconstrutivas");

if (variacaoPercentualPostagensDesconstrutivas > 0){
  bolinhaCardPostagensDesconstrutivas.style.backgroundColor = "#c3f8c8";
  imagemCardPostagensDesconstrutivas.src = "../assets/icons/Seta_Cima.svg";
  textoCardPostagensDesconstrutivas.textContent = variacaoPercentualPostagensDesconstrutivas + "% a mais do que na semana anterior."
}
else if (variacaoPercentualPostagensDesconstrutivas == 0){
  bolinhaCardPostagensDesconstrutivas.style.backgroundColor = "#c7c7c7";
  imagemCardPostagensDesconstrutivas.src = "../assets/icons/Sinal_Menos.svg";
  textoCardPostagensDesconstrutivas.textContent = "Não houve variação em relação à semana anterior."
}
else {
  bolinhaCardPostagensDesconstrutivas.style.backgroundColor = "#ffb5b5";
  imagemCardPostagensDesconstrutivas.src = "../assets/icons/Seta_Baixo.svg";
  textoCardPostagensDesconstrutivas.textContent = variacaoPercentualPostagensDesconstrutivas.toString().split("-").pop() + "% a menos do que na semana anterior."
}

var variacaoPercentualPostagensNeutras = 12;
var bolinhaCardPostagensNeutras = document.getElementById("bolinhaCardPostagensNeutras");
var imagemCardPostagensNeutras = document.getElementById("imagemCardPostagensNeutras");
var textoCardPostagensNeutras = document.getElementById("textoCardPostagensNeutras");

if (variacaoPercentualPostagensNeutras > 0){
  bolinhaCardPostagensNeutras.style.backgroundColor = "#c3f8c8";
  imagemCardPostagensNeutras.src = "../assets/icons/Seta_Cima.svg";
  textoCardPostagensNeutras.textContent = variacaoPercentualPostagensNeutras + "% a mais do que na semana anterior."
}
else if (variacaoPercentualPostagensNeutras == 0){
  bolinhaCardPostagensNeutras.style.backgroundColor = "#c7c7c7";
  imagemCardPostagensNeutras.src = "../assets/icons/Sinal_Menos.svg";
  textoCardPostagensNeutras.textContent = "Não houve variação em relação à semana anterior."
}
else {
  bolinhaCardPostagensNeutras.style.backgroundColor = "#ffb5b5";
  imagemCardPostagensNeutras.src = "../assets/icons/Seta_Baixo.svg";
  textoCardPostagensNeutras.textContent = variacaoPercentualPostagensNeutras.toString().split("-").pop() + "% a menos do que na semana anterior."
}

var variacaoPercentualPostagensConstrutivas = 0;
var bolinhaCardPostagensConstrutivas = document.getElementById("bolinhaCardPostagensConstrutivas");
var imagemCardPostagensConstrutivas = document.getElementById("imagemCardPostagensConstrutivas");
var textoCardPostagensConstrutivas = document.getElementById("textoCardPostagensConstrutivas");

if (variacaoPercentualPostagensConstrutivas > 0){
  bolinhaCardPostagensConstrutivas.style.backgroundColor = "#c3f8c8";
  imagemCardPostagensConstrutivas.src = "../assets/icons/Seta_Cima.svg";
  textoCardPostagensConstrutivas.textContent = variacaoPercentualPostagensConstrutivas + "% a mais do que na semana anterior."
}
else if (variacaoPercentualPostagensConstrutivas == 0){
  bolinhaCardPostagensConstrutivas.style.backgroundColor = "#c7c7c7";
  imagemCardPostagensConstrutivas.src = "../assets/icons/Sinal_Menos.svg";
  textoCardPostagensConstrutivas.textContent = "Não houve variação em relação à semana anterior."
}
else {
  bolinhaCardPostagensConstrutivas.style.backgroundColor = "#ffb5b5";
  imagemCardPostagensConstrutivas.src = "../assets/icons/Seta_Baixo.svg";
  textoCardPostagensConstrutivas.textContent = variacaoPercentualPostagensConstrutivas.toString().split("-").pop() + "% a menos do que na semana anterior."
}