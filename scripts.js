function enviarPedido(produto, btn, imagemCaminho) {
  const quantidade = btn.previousElementSibling.value;
  const urlImagem = `${location.origin}/${imagemCaminho}`; // gera a URL completa com base no local
  const mensagem = `Olá! Gostaria de encomendar:\n\nProduto: ${produto}\nQuantidade: ${quantidade}\n\nImagem do produto: ${urlImagem}`;
  const numeroLoja = "5511939016089"; // seu número aqui
  const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
