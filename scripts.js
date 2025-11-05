function enviarPedido(produto, btn) {
  const quantidade = btn.previousElementSibling.value;

  if (!quantidade || quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  const imagem = btn.closest('.card').querySelector('img');
  const urlImagem = imagem ? new URL(imagem.getAttribute('src'), window.location.origin).href : 'Imagem não encontrada';

  const mensagem = `Olá! Gostaria de encomendar:\n\n🍰 Produto: ${produto}\n📦 Quantidade: ${quantidade}\n🖼️ Imagem do produto: ${urlImagem}`;
  const numeroLoja = "5511939016089";
  const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}

document.addEventListener('contextmenu', function(e) {
  if (e.target.nodeName === 'IMG') {
    e.preventDefault();
  }
});
