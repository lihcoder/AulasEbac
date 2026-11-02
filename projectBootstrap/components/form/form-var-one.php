<!-- Formulario de contato com campos de identificacao e mensagem. -->
<div class="sm:col-10 mx-auto">

    <!-- Titulo da secao de contato. -->
    <h6 class="h3 mb-4">Entre em contato</h6>

    <!-- Campos preenchidos pelo visitante. -->
    <form class="vstack gap-3" novalidate>

        <div>
            <label for="fieldName" class="form-label">
                Nome
            </label>

            <input type="text" class="form-control" id="fieldName" placeholder="Digite seu nome" required>

            <div class="invalid-feedback">
                Informe seu nome.
            </div>
        </div>

        <div>
            <label for="fieldEmail" class="form-label">
                E-mail
            </label>

            <input type="email" class="form-control" id="fieldEmail" placeholder="seuemail@exemplo.com" required>

            <div class="invalid-feedback">
                Informe um e-mail válido.
            </div>
        </div>

        <div>
            <label for="fieldPhone" class="form-label">
                Telefone
            </label>

            <input type="tel" class="form-control" id="fieldPhone" placeholder="(00) 00000-0000">
        </div>

        <div>
            <label for="fieldMessage" class="form-label">
                Mensagem
            </label>

            <textarea class="form-control" id="fieldMessage" rows="5" placeholder="Digite sua mensagem..."
                required></textarea>

            <div class="invalid-feedback">
                Escreva sua mensagem.
            </div>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="fieldTerms" required>

            <label class="form-check-label" for="fieldTerms">
                Concordo com os termos e condições.
            </label>

            <div class="invalid-feedback">
                Você precisa aceitar os termos.
            </div>
        </div>

        <!-- Acao de envio do formulario. -->
        <button class="btn btn-primary align-self-start px-4" type="submit">
            Enviar mensagem
        </button>

    </form>
</div>