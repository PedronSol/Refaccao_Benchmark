var isNavOpen = false;
var checkboxSelecionado = false;

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("minhaSidebar").style.width = "10%";
  document.getElementById("minhaSidebar").style.alignItems = "start";
  document.getElementById("minhaSidebar").style.gap = "3%";

  document.getElementById("logoImg").src = "../assets/Logo_Newgate_Grande.png";

  document.getElementById("principalConteudo").style.marginLeft = "11%";

  document.getElementById("meuCandidatoTexto").style.display = "inline";
  document.getElementById("benchmarkTexto").style.display = "inline";
  document.getElementById("relatoriosTexto").style.display = "inline";
  document.getElementById("perfilUsuarioTexto").style.display = "inline";
  document.getElementById("configuracoesTexto").style.display = "inline";
  document.getElementById("sairTexto").style.display = "inline";
  document.getElementById("copyrightSidebar").style.display = "inline";

  document.getElementById("logoBtn").style.margin = "10% 0 4% 0";

  document.getElementById("linhaHorizontal").style.margin = "-10% 0";

  isNavOpen = true;
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("minhaSidebar").style.width = "4%";
  document.getElementById("minhaSidebar").style.alignItems = "center";

  document.getElementById("logoImg").src = "../assets/Logo_Newgate_Pequena.png";

  document.getElementById("principalConteudo").style.marginLeft = "5%";

  document.getElementById("meuCandidatoTexto").style.display = "None";
  document.getElementById("benchmarkTexto").style.display = "None";
  document.getElementById("relatoriosTexto").style.display = "None";
  document.getElementById("perfilUsuarioTexto").style.display = "None";
  document.getElementById("configuracoesTexto").style.display = "None";
  document.getElementById("sairTexto").style.display = "None";
  document.getElementById("copyrightSidebar").style.display = "None";

  document.getElementById("logoBtn").style.margin = "25% 0 4% 0";

  document.getElementById("linhaHorizontal").style.margin = "-40% 0";

  document.getElementById("minhaSidebar").style.gap = "5.2%";

  isNavOpen = false;
}

function hoverFilter() {
  document
    .getElementById("imagemFunil")
    .setAttribute("src", "../assets/icons/funilFiltroBranco.png");
}

function unhoverFilter() {
  document
    .getElementById("imagemFunil")
    .setAttribute("src", "../assets/icons/funilFiltros.png");
}

function openFilter() {
  document.getElementById("paginaFiltros").style.animation =
    "0.3s mostraFiltros";
  document.getElementById("paginaFiltros").style.display = "flex";
}

function hoverBack() {
  document
    .getElementById("iconeRetorno")
    .setAttribute("src", "../assets/icons/LeftHover.svg");
}

function unhoverBack() {
  document
    .getElementById("iconeRetorno")
    .setAttribute("src", "../assets/icons/Left.svg");
}

function closeFilter() {
  document.getElementById("paginaFiltros").style.animation =
    "0.3s fechaFiltros";
  document.getElementById("paginaFiltros").style.display = "none";
}

function decideNav() {
  if (isNavOpen == true) {
    closeNav();
  } else {
    openNav();
  }
}

function selecionaCheckbox() {
  if (checkboxSelecionado == false) {
    document.getElementById("checkbox-customizado").classList.add("checked");
    checkboxSelecionado = true;
  } else {
    document.getElementById("checkbox-customizado").classList.remove("checked");
    checkboxSelecionado = false;
  }
}

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
