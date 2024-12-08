let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

function jogar(escolhaUsuario) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  console.log(`Você escolheu: ${escolhaUsuario}`);
  console.log(`O computador escolheu: ${escolhaComputador}`);

  let resultado;

  if (escolhaUsuario === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = 'Você venceu!';
    pontuacaoJogador++; // Incrementa a pontuação do jogador
  } else {
    resultado = 'Você perdeu!';
    pontuacaoComputador++; // Incrementa a pontuação do computador
  }

  // Exibir o resultado no HTML
  document.getElementById('resultado').innerHTML = `
    <p>Você escolheu: <strong>${escolhaUsuario}</strong></p>
    <p>O computador escolheu: <strong>${escolhaComputador}</strong></p>
    <p><strong>${resultado}</strong></p>
    <p>Pontuação: Você ${pontuacaoJogador} - ${pontuacaoComputador} Computador</p>
  `;
}

function reiniciarPontuacao() {
  // Zera as pontuações
  pontuacaoJogador = 0;
  pontuacaoComputador = 0;

  // Atualiza o conteúdo exibido
  document.getElementById('resultado').innerHTML = `
    <p>Pontuação: Você ${pontuacaoJogador} - ${pontuacaoComputador} Computador</p>
    <p>O jogo foi reiniciado. Escolha sua jogada!</p>
  `;
}
