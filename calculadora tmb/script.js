document.getElementById("formulariocalcular").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o recarregamento da página
  calcularTMB();
});

function calcularTMB() {
  const sexo = document.getElementById("sexo").value;
  const idade = parseInt(document.getElementById("idade").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const atividade = parseFloat(document.getElementById("atividade").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
    resultado.innerHTML = "<strong>Preencha todos os campos corretamente!</strong>";
    return;
  }

  // Fórmula de Harris-Benedict
  let tmb;
  if (sexo === "masculino") {
    tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
  } else {
    tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
  }

  const tmbFinal = tmb * atividade;
  const paraEmagrecer = tmbFinal - 500;

  resultado.innerHTML = `
    <h3>Resultado:</h3>
    <p>Seu gasto calórico diário estimado é: <strong>${tmbFinal.toFixed(2)} calorias</strong>.</p>
    <p>Para emagrecer, consuma cerca de: <strong>${paraEmagrecer.toFixed(2)} calorias</strong>.</p>
  `;
}
