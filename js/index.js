const btnCopiar = document.getElementById("copy");

// Função genérica para mostrar Toast
function showToast(mensagem) {
  // 1. Cria o elemento HTML na memória
  const toastDiv = document.createElement("div");

  // 2. Adiciona a classe e o texto
  toastDiv.className = "toast show"; // Já adiciona 'show' para animar
  toastDiv.innerText = mensagem;

  // 3. Coloca o elemento no corpo da página
  document.body.appendChild(toastDiv);

  // 4. Remove o elemento depois de 3 segundos (Tempo da animação + leitura)
  // O CSS tem fadeout em 2.5s, então em 3s podemos matar o elemento
  setTimeout(function () {
    toastDiv.remove(); // Remove do HTML para não acumular lixo
  }, 3000);
}

// Seu evento de clique atualizado
btnCopiar.addEventListener("click", function () {
  const email = "seu.email@gmail.com";

  navigator.clipboard
    .writeText(email)
    .then(() => {
      // CHAMA A FUNÇÃO DE TOAST AQUI
      showToast("Email copiado com sucesso! 📋");
    })
    .catch((err) => {
      console.error("Erro: ", err);
      showToast("Erro ao copiar email."); // Toast de erro também!
    });
});
