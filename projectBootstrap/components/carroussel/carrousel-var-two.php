<!-- Carrossel com depoimentos de clientes. -->
<div class="sm:col-10 mx-auto">

    <!-- Cabecalho da secao e controles de navegacao. -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h6 class="h3 mb-1">Depoimentos</h6>
            <p class="text-secondary mb-0">
                Veja o que as pessoas dizem sobre nós.
            </p>
        </div>

        <!-- Botoes para trocar o grupo de depoimentos. -->
        <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary rounded-circle" type="button" data-bs-target="#depoimentosCarousel"
                data-bs-slide="prev" aria-label="Depoimento anterior">
                <span class="carousel-control-prev-icon" aria-hidden="true">
                    <img src="../images/arrow-left.svg" alt="">
                </span>
            </button>

            <button class="btn btn-outline-secondary rounded-circle" type="button" data-bs-target="#depoimentosCarousel"
                data-bs-slide="next" aria-label="Próximo depoimento">
                <span class="carousel-control-next-icon" aria-hidden="true">
                    <img src="../images/arrow-right.svg" alt="">
                </span>
            </button>
        </div>
    </div>

    <!-- Area principal do carrossel de depoimentos. -->
    <div id="depoimentosCarousel" class="carousel slide">

        <div class="carousel-inner gap-1">

            <!-- Primeiro grupo de depoimentos. -->
            <div class="carousel-item active">
                <div class="row g-3">

                    <!-- Depoimento 1 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 border rounded-4 p-3">
                            <div class="card-body d-flex flex-column">

                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <img src="https://picsum.photos/200/300" class="rounded-circle" width="56"
                                        height="56" alt="Foto de Maria Silva">

                                    <div>
                                        <p class="h6 mb-1">Maria Silva</p>
                                        <small class="text-secondary">
                                            Cliente
                                        </small>
                                    </div>
                                </div>

                                <p class="card-text mb-0">
                                    "Fiquei muito satisfeita com o atendimento.
                                    Toda a equipe foi atenciosa e prestativa
                                    durante todo o processo."
                                </p>

                            </div>
                        </div>
                    </div>

                    <!-- Depoimento 2 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 border rounded-4 p-3">
                            <div class="card-body d-flex flex-column">

                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <img src="https://picsum.photos/200/300" class="rounded-circle" width="56"
                                        height="56" alt="Foto de João Santos">

                                    <div>
                                        <p class="h6 mb-1">João Santos</p>
                                        <small class="text-secondary">
                                            Cliente
                                        </small>
                                    </div>
                                </div>

                                <p class="card-text mb-0">
                                    "Uma experiência excelente! Recomendo
                                    para todos que procuram qualidade,
                                    compromisso e confiança."
                                </p>

                            </div>
                        </div>
                    </div>

                    <!-- Depoimento 3 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 border rounded-4 p-3">
                            <div class="card-body d-flex flex-column">

                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <img src="https://picsum.photos/200/300" class="rounded-circle" width="56"
                                        height="56" alt="Foto de Ana Oliveira">

                                    <div>
                                        <p class="h6 mb-1">Ana Oliveira</p>
                                        <small class="text-secondary">
                                            Cliente
                                        </small>
                                    </div>
                                </div>

                                <p class="card-text mb-0">
                                    "Gostei muito de todo o suporte recebido.
                                    O resultado superou minhas expectativas!"
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Segundo grupo de depoimentos. -->
            <div class="carousel-item">
                <div class="row g-3">

                    <!-- Depoimento 4 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 border rounded-4 p-3">
                            <div class="card-body">

                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <img src="https://picsum.photos/200/300" class="rounded-circle" width="56"
                                        height="56" alt="Foto de Pedro Costa">

                                    <div>
                                        <p class="h6 mb-1">Pedro Costa</p>
                                        <small class="text-secondary">
                                            Cliente
                                        </small>
                                    </div>
                                </div>

                                <p class="card-text mb-0">
                                    "Atendimento incrível! Recomendo
                                    pela dedicação e profissionalismo."
                                </p>

                            </div>
                        </div>
                    </div>

                    <!-- Depoimento 5 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 border rounded-4 p-3">
                            <div class="card-body">

                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <img src="https://picsum.photos/200/300" class="rounded-circle" width="56"
                                        height="56" alt="Foto de Carla Mendes">

                                    <div>
                                        <p class="h6 mb-1">Carla Mendes</p>
                                        <small class="text-secondary">
                                            Cliente
                                        </small>
                                    </div>
                                </div>

                                <p class="card-text mb-0">
                                    "Uma experiência muito positiva.
                                    Com certeza voltarei a utilizar o serviço!"
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>





</div>