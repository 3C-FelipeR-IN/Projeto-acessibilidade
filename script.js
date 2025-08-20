document.addEventListener('DOMContentLoaded', () => {
  const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentarFonte = document.getElementById('aumentar-fonte');
  const diminuirFonte = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoFonte = 1; // tamanho base

  // Abre/fecha menu de acessibilidade
  botaoAcessibilidade.addEventListener('click', () => {
    botaoAcessibilidade.classList.toggle('rotacao-botao');
    opcoesAcessibilidade.classList.toggle('apresenta-lista');

    const expandido = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoAcessibilidade.setAttribute('aria-expanded', !expandido);
  });

  // Aumentar fonte
  aumentarFonte.addEventListener('click', () => {
    tamanhoFonte = Math.min(tamanhoFonte + 0.1, 2); // limite máx 200%
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });

  // Diminuir fonte
  diminuirFonte.addEventListener('click', () => {
    tamanhoFonte = Math.max(tamanhoFonte - 0.1, 0.7); // limite mín 70%
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });

  // Alternar alto contraste
  alternaContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');

    // Força o botão a ficar branco no modo contraste
    if (document.body.classList.contains('alto-contraste')) {
      botaoAcessibilidade.style.color = "#ffffff";
    } else {
      botaoAcessibilidade.style.color = "";
    }
  });

  // Aparecer/desaparecer seções ao rolar
  const secoes = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
      } else {
        entrada.target.classList.remove('visivel');
      }
    });
  }, { threshold: 0.3 });

  secoes.forEach(secao => {
    secao.classList.add('invisivel'); // começa invisível
    observer.observe(secao);
  });
});
