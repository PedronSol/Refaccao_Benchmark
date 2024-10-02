var isNavOpen = false;

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("minhaSidebar").style.width = "10%";
    document.getElementById("minhaSidebar").style.alignItems = "start";
    document.getElementById("minhaSidebar").style.gap = "3%";

    document.getElementById("logoImg").src = "assets/Logo_Newgate_Grande.png";

    document.getElementById("principalConteudo").style.marginLeft = "11%"

    document.getElementById("visaoGeralTexto").style.display = "inline";
    document.getElementById("dashboardsTexto").style.display = "inline";
    document.getElementById("relatoriosTexto").style.display = "inline";
    document.getElementById("perfilUsuarioTexto").style.display = "inline";
    document.getElementById("configuracoesTexto").style.display = "inline";

    document.getElementById("logoBtn").style.margin = "10% 0 4% 0";

    document.getElementById("linhaHorizontal").style.margin = "-10% 0"

    isNavOpen = true;
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("minhaSidebar").style.width = "4%";
    document.getElementById("minhaSidebar").style.alignItems = "center";

    document.getElementById("logoImg").src = "assets/Logo_Newgate_Pequena.png";

    document.getElementById("principalConteudo").style.marginLeft = "5%"

    document.getElementById("visaoGeralTexto").style.display = "None";
    document.getElementById("dashboardsTexto").style.display = "None";
    document.getElementById("relatoriosTexto").style.display = "None";
    document.getElementById("perfilUsuarioTexto").style.display = "None";
    document.getElementById("configuracoesTexto").style.display = "None";

    document.getElementById("logoBtn").style.margin = "25% 0 4% 0";

    document.getElementById("linhaHorizontal").style.margin = "-40% 0"

    document.getElementById("minhaSidebar").style.gap = "5.2%";

    isNavOpen = false;
  }

function hover() {
    document.getElementById("imagemFunil").setAttribute('src', 'assets/icons/funilFiltroBranco.png');
}
  
function unhover() {
    document.getElementById("imagemFunil").setAttribute('src', 'assets/icons/funilFiltros.png');
}

function decideNav() {
  if (isNavOpen == true) {
    closeNav();
  }

  else {
    openNav();
  }
}