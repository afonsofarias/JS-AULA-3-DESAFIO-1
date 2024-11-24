let contador = 0;
        document.getElementById('botao').onclick = function() {
            contador++;
            document.getElementById('contador').textContent = `Você clicou ${contador} vezes.`;
        };