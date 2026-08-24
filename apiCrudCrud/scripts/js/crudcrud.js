
const CRUDCRUD_API_KEY = '1383056f858e43c38bf86e818fb8349c'; //a minha chave
const API_URL = `https://crudcrud.com/api/${CRUDCRUD_API_KEY}/clientes`; //acessando dentro do meu cofre particular

/*pegando tanto o form como os campos de digitar, lista, mensagem,contagem e toast por id */
const form = document.getElementById('form-cliente');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const listaClientes = document.getElementById('lista-clientes');
const mensagemVazia = document.getElementById('mensagem-vazia');
const contagemClientes = document.getElementById('contagem-clientes');
const toast = document.getElementById('toast');

// entender melhor essa função
function mostrarToast(mensagem, tipo = 'sucesso') {
  toast.textContent = mensagem;
  toast.className = `show ${tipo}`;
  setTimeout(() => { toast.className = ''; }, 3000);
}

// Desenha a lista de clientes na tela a partir do array vindo da API
function renderizarClientes(clientes) {
  listaClientes.innerHTML = ''; /*aqui a partir que essa função renderizarClientes for chamada,
  o listaClientes vai ser puxado e escrito no html, que aqui estará vazio pq quem preenche
  vai ser essa função.*/

  contagemClientes.textContent = clientes.length;

  if (clientes.length === 0) {
    mensagemVazia.style.display = 'block';
    listaClientes.style.display = 'none';
    return;
  }

  mensagemVazia.style.display = 'none';
  listaClientes.style.display = 'block';

  clientes.forEach((cliente) => {
    const item = document.createElement('div');
    item.className = 'cliente-item';
    item.innerHTML = `
      <div class="cliente-item__info">
        <div>
          <p class="cliente-item__nome">${cliente.nome}</p>
          <p class="cliente-item__detalhe">${cliente.email}</p>
        </div>
      </div>
      <button class="btn btn--danger btn-excluir" data-id="${cliente._id}">
        Excluir
      </button>
    `;
    listaClientes.appendChild(item);
  });

  // Liga o evento de clique em cada botão "Excluir" recém-criado
  document.querySelectorAll('.btn-excluir').forEach((botao) => {
    botao.addEventListener('click', () => excluirCliente(botao.dataset.id));
  });
}

// GET — busca todos os clientes salvos na API
async function carregarClientes() {
  try {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error('Erro ao buscar clientes');
    const clientes = await resposta.json();
    renderizarClientes(clientes);
  } catch (erro) {
    console.error(erro);
    mostrarToast('Não foi possível carregar os clientes.', 'erro');
  }
}

// POST — envia nome e e-mail para a API
async function cadastrarCliente(nome, email) {
  try {
    const resposta = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email }),
    });
    if (!resposta.ok) throw new Error('Erro ao cadastrar cliente');
    mostrarToast('Cliente cadastrado com sucesso!');
    await carregarClientes(); // recarrega a lista pra mostrar o novo item
  } catch (erro) {
    console.error(erro);
    mostrarToast('Erro ao cadastrar cliente.', 'erro');
  }
}

// DELETE — remove um cliente pelo _id gerado pelo crudcrud
async function excluirCliente(id) {
  try {
    const resposta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!resposta.ok) throw new Error('Erro ao excluir cliente');
    mostrarToast('Cliente removido.');
    await carregarClientes();
  } catch (erro) {
    console.error(erro);
    mostrarToast('Erro ao excluir cliente.', 'erro');
  }
}

// Captura o envio do formulário
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  if (!nome || !email) return;

  cadastrarCliente(nome, email);
  form.reset();
});

// Ao carregar a página, já busca os clientes existentes
document.addEventListener('DOMContentLoaded', carregarClientes);