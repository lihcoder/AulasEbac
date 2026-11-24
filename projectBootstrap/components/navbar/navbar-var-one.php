<!-- Cabecalho principal e navegacao da pagina. -->
<header class="container-fluid">
    <nav class="navbar md:navbar-expand bg-1">
        <div class="container-fluid">
            <!-- Identidade da barbearia. -->
            <a class="navbar-brand" href="#">Estilo Livre</a>
            <!-- Botao que abre a navegacao em telas menores. -->
            <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer"
                aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <!-- Menu lateral com os links de navegacao. -->
            <dialog class="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                <div class="drawer-header">
                    <!-- Titulo e controle de fechamento do menu. -->
                    <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                </div>
                <!-- Opcoes disponiveis para o visitante. -->
                <div class="drawer-body mb-2 md:mb-0">
                    <ul class="nav navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://localhost/ebac/projectBootstrap/view/index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#sobre">Sobre Nós</a>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                                Serviços
                            </button>
                            <div class="menu">
                                <a class="menu-item" href="#servico-1">Pigmentação de barba</a>
                                <a class="menu-item" href="#servico-2">Camuflagem de Fios Brancos</a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#depoimentos">Depoimentos</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </dialog>
        </div>
    </nav>
</header>