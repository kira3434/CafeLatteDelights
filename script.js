
  function toggleLinksLateral(element) {
    var linksLateral = document.querySelector('.links-lateral');
    var navbarImg = document.getElementById('navbar-img');

    // Verificar se a classe 'active' está presente
    var isActive = linksLateral.classList.contains('active');

    if (isActive) {
      // Remover classe 'active' para ocultar a div links-lateral
      linksLateral.classList.remove('active');

      // Restaurar a imagem original da navbar-links
      navbarImg.src = 'imagens-cafeteria/menu.png';   
    } else {
      // Adicionar classe 'active' para exibir a div links-lateral
      linksLateral.classList.add('active');

      // Alterar a imagem da navbar-links para imagem2.jpg
      navbarImg.src = 'imagens-cafeteria/close.png';
    }
  }
