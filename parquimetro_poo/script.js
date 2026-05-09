// =============================================================
//  PARQUÍMETRO DIGITAL — Lógica POO em JavaScript
// =============================================================

// ---------------------------------------------------------------
// CLASSE BASE: Dispositivo
// Representa qualquer dispositivo de cobrança com identificação
// ---------------------------------------------------------------
class Dispositivo {
  #id;
  #local;

  constructor(id, local) {
    this.#id    = id;
    this.#local = local;
    this.ativo  = true;
  }

  get id()    { return this.#id; }
  get local() { return this.#local; }

  status() {
    return this.ativo ? "OPERACIONAL" : "FORA DE SERVIÇO";
  }

  desativar() { this.ativo = false; }
  ativar()    { this.ativo = true;  }
}

// ---------------------------------------------------------------
// CLASSE: TabelaTarifas
// Define as faixas de valores e os tempos correspondentes
// ---------------------------------------------------------------
class TabelaTarifas {
  constructor(faixas) {
    // faixas: Array de { minimo, maximo, minutos, descricao }
    this.faixas = faixas;
  }

  // Encontra a faixa correspondente ao valor pago
  encontrarFaixa(valor) {
    return this.faixas.find(f => valor >= f.minimo && valor < f.maximo) || null;
  }

  // Retorna o custo mínimo aceitável
  get minimoAceitavel() {
    return Math.min(...this.faixas.map(f => f.minimo));
  }
}

// ---------------------------------------------------------------
// CLASSE: Pagamento
// Registra os dados de uma transação
// ---------------------------------------------------------------
class Pagamento {
  constructor(valor, faixa) {
    this.valor      = valor;
    this.faixa      = faixa;
    this.tarifaBase = faixa.minimo;
    this.troco      = parseFloat((valor - faixa.minimo).toFixed(2));
    this.minutos    = faixa.minutos;
    this.timestamp  = new Date();
  }

  get tempoFormatado() {
    const h = Math.floor(this.minutos / 60);
    const m = this.minutos % 60;
    if (h === 0) return `${m} min`;
    if (m === 0) return h === 24 ? "Dia inteiro (24h)" : `${h}h`;
    return `${h}h ${m}min`;
  }

  get horaExpiracao() {
    const exp = new Date(this.timestamp.getTime() + this.minutos * 60 * 1000);
    return exp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  get valorFormatado() {
    return this.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  get tarifaFormatada() {
    return this.tarifaBase.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  get trocoFormatado() {
    return this.troco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
}

// ---------------------------------------------------------------
// CLASSE PRINCIPAL: Parquimetro  (herda de Dispositivo)
// Junta tabela de tarifas + lógica de cálculo + emissão de ticket
// ---------------------------------------------------------------
class Parquimetro extends Dispositivo {
  #tabela;
  #historico;

  constructor(id, local, tabela) {
    super(id, local);          // chama o construtor da classe pai
    this.#tabela    = tabela;
    this.#historico = [];
  }

  // Processa o pagamento e retorna um objeto Pagamento (ou lança erro)
  processar(valor) {
    if (!this.ativo) {
      throw new Error("Parquímetro fora de serviço.");
    }

    const valorNum = parseFloat(valor);

    if (isNaN(valorNum) || valorNum <= 0) {
      throw new Error("Valor inválido. Insira um número positivo.");
    }

    if (valorNum < this.#tabela.minimoAceitavel) {
      throw new Error(`Valor insuficiente. Mínimo: R$ ${this.#tabela.minimoAceitavel.toFixed(2)}.`);
    }

    const faixa = this.#tabela.encontrarFaixa(valorNum);

    if (!faixa) {
      throw new Error("Faixa tarifária não encontrada para este valor.");
    }

    const pagamento = new Pagamento(valorNum, faixa);
    this.#historico.push(pagamento);
    return pagamento;
  }

  get historico()      { return [...this.#historico]; }
  get totalTransacoes(){ return this.#historico.length; }
}

// =============================================================
//  INSTANCIAÇÃO — criando o parquímetro com sua tabela de tarifas
// =============================================================

const tabelaPadrao = new TabelaTarifas([
  { minimo: 1.00, maximo: 2.00,   minutos: 30,   descricao: "30 minutos"   },
  { minimo: 2.00, maximo: 3.00,   minutos: 60,   descricao: "1 hora"       },
  { minimo: 3.00, maximo: 5.00,   minutos: 120,  descricao: "2 horas"      },
  { minimo: 5.00, maximo: 8.00,   minutos: 240,  descricao: "4 horas"      },
  { minimo: 8.00, maximo: Infinity, minutos: 1440, descricao: "Dia inteiro" },
]);

// Instância do parquímetro
const parquimetro = new Parquimetro("PQ-001", "Praça Central, Vaga 12", tabelaPadrao);

// =============================================================
//  FUNÇÕES DE INTERFACE
// =============================================================

function formatarDinheiro(val) {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function animarDisplay(valor) {
  const dv = document.getElementById("displayValue");
  dv.classList.add("blink");
  dv.textContent = formatarDinheiro(valor);
  setTimeout(() => dv.classList.remove("blink"), 600);
}

function setLights(tipo) {
  // tipo: 'idle' | 'ok' | 'error'
  const [l1, l2, l3] = ["light1","light2","light3"].map(id => document.getElementById(id));
  [l1, l2, l3].forEach(l => l.className = "light");
  if (tipo === "ok")    { l1.classList.add("green"); l2.classList.add("green"); l3.classList.add("green"); }
  if (tipo === "error") { l1.classList.add("red");   l2.classList.add("red");   l3.classList.add("red");   }
  if (tipo === "idle")  { l1.classList.add("yellow"); }
}

function exibirResultado(pagamento) {
  const panel = document.getElementById("resultPanel");
  const inner = document.getElementById("resultInner");
  const dt    = document.getElementById("displayTime");

  // Atualiza display superior
  const h = Math.floor(pagamento.minutos / 60);
  const m = pagamento.minutos % 60;
  dt.textContent = pagamento.minutos >= 1440
    ? "24:00 h"
    : `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")} h`;

  const trocoHTML = pagamento.troco > 0
    ? `<div class="result-row troco">
         <span class="result-label">💰 TROCO</span>
         <span class="result-val troco-val">${pagamento.trocoFormatado}</span>
       </div>`
    : `<div class="result-row">
         <span class="result-label">💰 TROCO</span>
         <span class="result-val">Sem troco</span>
       </div>`;

  inner.innerHTML = `
    <div class="ticket-header">🎫 COMPROVANTE</div>
    <div class="result-row">
      <span class="result-label">📍 Local</span>
      <span class="result-val">${parquimetro.local}</span>
    </div>
    <div class="result-row">
      <span class="result-label">💵 Valor pago</span>
      <span class="result-val">${pagamento.valorFormatado}</span>
    </div>
    <div class="result-row">
      <span class="result-label">📋 Tarifa</span>
      <span class="result-val">${pagamento.faixa.descricao}</span>
    </div>
    <div class="result-row highlight">
      <span class="result-label">⏱ Tempo</span>
      <span class="result-val time-val">${pagamento.tempoFormatado}</span>
    </div>
    <div class="result-row">
      <span class="result-label">🕐 Válido até</span>
      <span class="result-val">${pagamento.horaExpiracao}</span>
    </div>
    ${trocoHTML}
    <div class="result-row small">
      <span class="result-label">🔢 Transação #${parquimetro.totalTransacoes}</span>
      <span class="result-val">${pagamento.timestamp.toLocaleTimeString("pt-BR")}</span>
    </div>
  `;

  panel.classList.add("visible");
  setLights("ok");
}

function exibirErro(msg) {
  const panel = document.getElementById("resultPanel");
  const inner = document.getElementById("resultInner");
  const dt    = document.getElementById("displayTime");

  dt.textContent = "--:-- h";

  inner.innerHTML = `
    <div class="error-block">
      <div class="error-icon">⛔</div>
      <div class="error-msg">${msg}</div>
    </div>
  `;

  panel.classList.add("visible");
  setLights("error");

  // Shake animation
  panel.classList.add("shake");
  setTimeout(() => panel.classList.remove("shake"), 500);
}

// Função principal chamada pelo botão
function calcular() {
  const input = document.getElementById("valorInput");
  const valor = input.value;

  // Atualiza display
  const num = parseFloat(valor);
  if (!isNaN(num) && num > 0) animarDisplay(num);

  try {
    const pagamento = parquimetro.processar(valor);
    exibirResultado(pagamento);
  } catch (e) {
    exibirErro(e.message);
  }
}

// Permitir Enter para calcular
document.getElementById("valorInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") calcular();
});

// Atualização do display ao digitar
document.getElementById("valorInput").addEventListener("input", (e) => {
  const num = parseFloat(e.target.value);
  const dv  = document.getElementById("displayValue");
  dv.textContent = (!isNaN(num) && num > 0) ? formatarDinheiro(num) : "R$ 0,00";
});

// Estado inicial
setLights("idle");
document.getElementById("statusDot").title = parquimetro.status();