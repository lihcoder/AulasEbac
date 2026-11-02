<!-- Importando o head do projeto -->
<?php include __DIR__ . '/../components/head/head.php'; ?>

<!-- Importando o CSS do projeto, home e carousel-var-one -->
<link rel="stylesheet" href="../css/components/home/home.css">
<link rel="stylesheet" href="../css/components/carroussel/carrousel-var-one.css">

<body>
    <!-- Componente 1 de navbar -->
    <?php include __DIR__ . '/../components/navbar/navbar-var-one.php'; ?>

    <main class="container-fluid">
        <!-- Componente 1 de carroussel -->
        <?php include __DIR__ . '/../components/carroussel/carrousel-var-one.php'; ?>

        <!-- Seção de Sobre Nós -->
        <section>
            <div class="row d-flex align-content-center justify-content-center align-items-center mb-3">
                <div class="sm:col-10 mb-3 sm:mb-0">
                    <div class="card">
                        <div class="card-body text-center">
                            <h3 class="card-title">Sobre Nós</h3>
                            <p class="card-text">Na nossa barbearia, tradição e modernidade caminham lado a lado.
                                Criamos um
                                ambiente acolhedor e estiloso, onde cada cliente recebe um atendimento personalizado e
                                sai
                                com a
                                autoestima renovada. Mais do que cortes de cabelo e cuidados com a barba, oferecemos uma
                                experiência completa de bem-estar e confiança.💈✂️</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção de Serviços -->
        <section>
            <div class="row mb-3 d-flex justify-content-center">
                <div class="sm:col-12 mb-3">
                    <h4 class="text-center">Nossos Serviços</h4>
                </div>
                <!-- Cards de serviços: Serviço 1 -->
                <div class="sm:col-5 mb-3 sm:mb-0">
                    <div class="card">
                        <div class="card-body h-100">
                            <h5 class="card-title">Pigmentação de barba</h5>
                            <p class="card-text">Correção de falhas e realce da barba por meio de técnicas de
                                pigmentação
                                que
                                oferecem um aspecto mais preenchido e natural.</p>
                            <a href="#" class="btn-solid theme-primary">Quero Agendar!</a>
                        </div>
                    </div>
                </div>

                <!-- Cards de serviços: Serviço 2 -->
                <div class="sm:col-5">
                    <div class="card">
                        <div class="card-body h-100">
                            <h5 class="card-title">Camuflagem de Fios Brancos</h5>
                            <p class="card-text">Técnica que suaviza os fios grisalhos de forma natural, rejuvenescendo
                                a
                                aparência sem mudanças radicais.</p>
                            <a href="#" class="btn-solid theme-primary">Quero Agendar!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção de Depoimentos e Formulário -->
        <section class="py-5">
            <div class="row g-5">
                <!-- Componente 2 de carroussel -->
                <?php include __DIR__ . '/../components/carroussel/carrousel-var-two.php'; ?>

                <!-- Componente 1 de formulário -->
                <?php include __DIR__ . '/../components/form/form-var-one.php'; ?>
            </div>
        </section>
    </main>

</body>

</html>