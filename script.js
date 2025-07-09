document.getElementById("form-recomendacao").addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipoCabelo").value;
  const oleo = document.getElementById("oleosidade").value;
  const quimica = document.getElementById("quimica").value;
  const pintado = document.getElementById("pintado").value;

  const resultado = document.getElementById("resultado");

  const bancoRegras = [
    { tipo: "Liso", oleo: "Normal", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Cresce Cabelo" },
    { tipo: "Liso", oleo: "Normal", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Ilumini Blond" },
    { tipo: "Liso", oleo: "Normal", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Essencial Bio" },
    { tipo: "Liso", oleo: "Normal", quimica: "Não", pintado: "Não", shampoo: "Shampoo Tutano" },
    { tipo: "Liso", oleo: "Oleoso", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Cresce Cabelo" },
    { tipo: "Liso", oleo: "Oleoso", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Antiemborrachamento" },
    { tipo: "Liso", oleo: "Oleoso", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Micelar" },
    { tipo: "Liso", oleo: "Oleoso", quimica: "Não", pintado: "Não", shampoo: "Shampoo Micelar" },
    { tipo: "Liso", oleo: "Seco", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Absolut Repair" },
    { tipo: "Liso", oleo: "Seco", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Absolut Repair" },
    { tipo: "Liso", oleo: "Seco", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Essencial Bio" },
    { tipo: "Liso", oleo: "Seco", quimica: "Não", pintado: "Não", shampoo: "Shampoo Meu Cronograma" },
    { tipo: "Ondulado", oleo: "Normal", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Antiemborrachamento" },
    { tipo: "Ondulado", oleo: "Normal", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Antiemborrachamento" },
    { tipo: "Ondulado", oleo: "Normal", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Tutano" },
    { tipo: "Ondulado", oleo: "Normal", quimica: "Não", pintado: "Não", shampoo: "Shampoo Tutano" },
    { tipo: "Ondulado", oleo: "Oleoso", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Red Matizador" },
    { tipo: "Ondulado", oleo: "Oleoso", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Absolut Repair" },
    { tipo: "Ondulado", oleo: "Oleoso", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Essencial Bio" },
    { tipo: "Ondulado", oleo: "Oleoso", quimica: "Não", pintado: "Não", shampoo: "Shampoo Cresce Cabelo" },
    { tipo: "Ondulado", oleo: "Seco", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Black Matizador" },
    { tipo: "Ondulado", oleo: "Seco", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Absolut Repair" },
    { tipo: "Ondulado", oleo: "Seco", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Essencial Bio" },
    { tipo: "Ondulado", oleo: "Seco", quimica: "Não", pintado: "Não", shampoo: "Shampoo Red Matizador" },
    { tipo: "Cacheado", oleo: "Normal", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Normal", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Normal", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Normal", quimica: "Não", pintado: "Não", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Oleoso", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Oleoso", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Oleoso", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Oleoso", quimica: "Não", pintado: "Não", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Seco", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Seco", quimica: "Sim", pintado: "Não", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Seco", quimica: "Não", pintado: "Sim", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Cacheado", oleo: "Seco", quimica: "Não", pintado: "Não", shampoo: "Shampoo Cachos Curly" },
    { tipo: "Crespo", oleo: "Normal", quimica: "Sim", pintado: "Sim", shampoo: "Shampoo Red Matizador" }
  ];

  const match = bancoRegras.find(item =>
    item.tipo === tipo &&
    item.oleo === oleo &&
    item.quimica === quimica &&
    item.pintado === pintado
  );

  if (match) {
    resultado.innerHTML = `✅ Recomendamos: <strong>${match.shampoo}</strong>`;
    resultado.style.color = "green";
  } else {
    resultado.innerHTML = "❌ Nenhuma recomendação encontrada.";
    resultado.style.color = "red";
  }
});