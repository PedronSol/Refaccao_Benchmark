var isNavOpen = false;
var checkboxSelecionado = false;

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