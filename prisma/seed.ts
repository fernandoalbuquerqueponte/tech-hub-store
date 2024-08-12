const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const main = async () => {
  // Create categories
  const mouseCategory = await prisma.category.create({
    data: {
      name: "Mouses",
      slug: "mouses",
    },
  });

  const keyboardCategory = await prisma.category.create({
    data: {
      name: "Teclados",
      slug: "teclados",
    },
  });

  const processorCategory = await prisma.category.create({
    data: {
      name: "Processadores",
      slug: "processadores",
    },
  });

  console.log(
    `Created categories: ${mouseCategory.name}, ${keyboardCategory.name}, ${processorCategory.name}`
  );

  // Create stores
  const store = await prisma.store.create({
    data: {
      name: "Tech Store",
    },
  });

  console.log(`Created store: ${store.name}`);

  // Create products
  const products = [
    // Mouses
    {
      name: "Logitech G403 Prodigy Wireless Gaming Mouse Logitech G403 Prodigy Gaming",
      description:
        "O Logitech G403 Prodigy Wireless Gaming Mouse é um mouse de alta performance para gamers exigentes. Com conectividade sem fio de 2.4 GHz e taxa de resposta de 1ms, garante uma experiência sem atrasos. Equipado com o sensor óptico PMW3366, oferece precisão excepcional e rastreamento consistente. A sensibilidade ajustável de 200 a 12.000 DPI permite personalização precisa. O design ergonômico com laterais emborrachadas proporciona conforto durante longas sessões. A iluminação RGB LIGHTSYNC personalizável com até 16,8 milhões de cores e uma bateria com até 32 horas de jogo contínuo são destaques. Com 6 botões programáveis e peso removível de 10g, o G403 Prodigy é ideal para gamers em busca de um mouse sem fio confiável e personalizável.",
      discountPercentage: 20,
      basePrice: 550.0,
      imageUrl:
        "https://utfs.io/f/23cf1371-7e83-4260-b1e8-00b51bf9c045-7ytdp5.png",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-gamer-logitech-g-pro",
      featuredProduct: true,
    },
    {
      name: "Mouse Gamer Logitech G203 LIGHTSYNC RGB, Efeito de Ondas de Cores, 6 Botões Programáveis e Até 8.000 DPI, Preto",
      description:
        "O Mouse Gamer Logitech G203 LIGHTSYNC RGB é projetado para uma experiência de jogo precisa e estilosa. Com um sensor óptico de até 8.000 DPI, oferece movimentos rápidos e exatos. Seus 6 botões programáveis permitem macros e comandos personalizados via software Logitech G HUB. A tecnologia LIGHTSYNC RGB proporciona efeitos de iluminação dinâmicos com até 16,8 milhões de cores, sincronizando com outros dispositivos Logitech G. O design ergonômico e a forma clássica garantem conforto e resposta rápida. Disponível na cor preta, combina estilo e funcionalidade. Ideal para gamers que buscam um mouse confiável e personalizável com alto desempenho e recursos avançados.",
      discountPercentage: 50,
      basePrice: 300.0,
      imageUrl:
        "https://utfs.io/f/74ec815d-b184-4b71-a496-96b1582e71cb-jqh3rv.png",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-gamer-logitech-g203-lightsync-rgb",
    },
    {
      name: "Razer DeathAdder",
      description:
        "O Razer DeathAdder é um mouse gamer icônico, conhecido por sua performance, ergonomia e durabilidade excepcionais. Com um sensor óptico preciso, oferece rastreamento até 20.000 DPI, ideal para jogos competitivos. Seu formato ergonômico e laterais emborrachadas proporcionam conforto e um agarre firme durante longas sessões. A tecnologia Razer Chroma permite personalizar a iluminação com 16,8 milhões de cores, sincronizando com outros dispositivos Razer. Possui até 5 botões Hyperesponse programáveis e switches mecânicos com durabilidade de até 70 milhões de cliques. O Razer DeathAdder é a escolha perfeita para gamers que buscam precisão e conforto, oferecendo uma vantagem competitiva em qualquer jogo.",
      discountPercentage: 30,
      basePrice: 350.0,
      imageUrl:
        "https://utfs.io/f/552b4766-d4b0-48e2-a5e4-b02f785ed6ad-1avnco.png",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-gamer-razer-deathadder",
    },

    // Keyboards
    {
      name: "ASUS ROG Claymore Core RGB Teclado Mecânico",
      description:
        "O ASUS ROG Claymore Core RGB é um teclado mecânico de alta performance para gamers exigentes, oferecendo precisão e durabilidade. Utiliza switches Cherry MX, conhecidos por sua resposta tátil e rapidez. A iluminação RGB individual para cada tecla é personalizável e pode ser sincronizada com outros dispositivos ASUS via Aura Sync. Seu design compacto e modular economiza espaço e melhora o conforto durante longas sessões de jogo. Inclui teclas de atalho para mídia e macros programáveis, otimizando comandos complexos. A construção em alumínio escovado garante resistência e uma aparência premium. Compatível com o software ROG Armoury II, permite ajustes avançados de perfis e iluminação.",
      discountPercentage: 40,
      basePrice: 760.0,
      imageUrl:
        "https://utfs.io/f/c4a365d9-dd84-4136-96ff-c504af16fb7f-e7n8ho.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-mecanico-asus-rog-claymore",
    },
    {
      name: "HyperX Alloy Elite RGB Mechanical Gaming Keyboard",
      description:
        "O HyperX Alloy Elite RGB é um teclado mecânico de alta performance para gamers, oferecendo precisão e durabilidade. Equipado com switches Cherry MX, proporciona uma resposta tátil rápida, ideal para jogos competitivos. Cada tecla é retroiluminada individualmente com RGB dinâmico, personalizável pelo software HyperX NGenuity. A barra de luz com efeitos dinâmicos adiciona um toque visual impressionante. O design robusto em aço garante estabilidade, e a barra de descanso destacável oferece conforto ergonômico. Inclui teclas de mídia dedicadas, controle de iluminação e portas USB 2.0 pass-through. Com 100% anti-ghosting e rollover de tecla N, é ideal para uma experiência de jogo imersiva e eficiente.",
      discountPercentage: 20,
      basePrice: 500.0,
      imageUrl:
        "https://utfs.io/f/94ebe30d-cce9-4c46-8003-23c3f2684701-bhzhs.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-mecanico-hyperx-alloy-elite-rgb",
      featuredProduct: true,
    },
    {
      name: "Logitech G PRO",
      description:
        "O Logitech G PRO Mechanical Gaming Keyboard é um teclado mecânico desenvolvido com jogadores profissionais para máxima precisão e durabilidade. Equipado com switches Romer-G Tactile, oferece uma resposta tátil rápida e silenciosa, com vida útil de até 70 milhões de cliques. Seu design compacto e tenkeyless economiza espaço e facilita o transporte. A estrutura em aço reforçado proporciona estabilidade e resistência. A iluminação RGB ajustável por tecla pode ser personalizada com 16,8 milhões de cores e sincronizada com dispositivos Logitech G via software G HUB. Com 26-key rollover e anti-ghosting, garante precisão em combinações de teclas. Inclui um cabo USB destacável para fácil transporte.",
      discountPercentage: 50,
      basePrice: 500.0,
      imageUrl:
        "https://utfs.io/f/ec6e0c0d-322f-4fdc-b274-94c65cdf8115-k57z9t.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-gamer-logitech-g-pro",
      featuredProduct: true,
    },
    {
      name: "Teclado Mecânico COUGAR ULTIMUS RGB",
      description:
        "O Teclado Mecânico COUGAR ULTIMUS RGB é robusto e estiloso, ideal para gamers que buscam desempenho e durabilidade. Equipado com switches mecânicos de alta qualidade, oferece uma resposta tátil rápida, perfeita para jogos e digitação. Cada tecla possui iluminação RGB personalizável, ajustável pelo software COUGAR UIX. A construção robusta com placa metálica e proteção contra respingos garante durabilidade e estabilidade. Conta com 104 teclas, incluindo funções para mídia e 100% anti-ghosting com N-key rollover. O cabo USB trançado assegura uma conexão estável e durável. O COUGAR ULTIMUS RGB é ideal para quem procura um teclado mecânico confiável e altamente personalizável.",
      discountPercentage: 50,
      basePrice: 700.0,
      imageUrl:
        "https://utfs.io/f/e94746de-615f-41d1-8ca6-649b8ef74a70-t0299r.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-mecanico-cougar-ultimus-rgb",
      featuredProduct: true,
    },

    // Processors
    {
      name: "Intel Core i5-8600K Desktop Processor 6 Cores up to 4.3 GHz Unlocked LGA 1151 300 Series 95W",
      description:
        "O Intel Core i5-8600K é um processador de desktop de alta performance para entusiastas e gamers. Com 6 núcleos e 6 threads, oferece uma velocidade base de 3.6 GHz e pode atingir até 4.3 GHz com Intel Turbo Boost. O processador desbloqueado permite overclocking, exigindo uma placa-mãe compatível da série 300 e resfriamento adequado. Compatível com o socket LGA 1151, tem um TDP de 95W e suporta memória DDR4 de até 2666 MHz. Inclui gráficos integrados Intel UHD Graphics 630 para tarefas gráficas básicas e reprodução de mídia. É ideal para multitarefas, jogos e criação de conteúdo, equilibrando custo e performance.",
      discountPercentage: 35,
      basePrice: 1200.0,
      imageUrl:
        "https://utfs.io/f/8ecab1da-cb46-43ce-b400-651df5a92d3e-pn33xr.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-i5-8600k",
      featuredProduct: true,
    },
    {
      name: "Intel Core i7-7700K Desktop Processor 4 Cores up to 4.5 GHz Unlocked LGA 1151 100200 Series 91W",
      description:
        "O Intel Core i7-7700K é um processador de desktop de alta performance, ideal para gamers e criadores de conteúdo. Com 4 núcleos e 8 threads, opera a 4.2 GHz e pode atingir 4.5 GHz com Intel Turbo Boost. Desbloqueado para overclocking, requer uma placa-mãe das séries 100 ou 200 e um bom sistema de resfriamento. Compatível com o socket LGA 1151, tem um TDP de 91W e suporta memória DDR4 até 2400 MHz. Inclui gráficos Intel HD Graphics 630 para tarefas gráficas básicas. É robusto para multitarefas, jogos e produção de mídia, oferecendo desempenho fluido e responsivo.",
      discountPercentage: 50,
      basePrice: 1500.0,
      imageUrl:
        "https://utfs.io/f/6522cb2c-e28b-4d13-ac0f-49fd60348511-amyvyh.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-core-i7-7700k",
      featuredProduct: true,
    },
    {
      name: "Processador AMD Ryzen 5 2600 3.4GHz (3.9GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, YD2600BBAFBOX, S Video",
      description:
        "O AMD Ryzen 5 2600 é um processador eficiente para gamers e criadores de conteúdo, com 6 núcleos e 12 threads. Opera a 3.4 GHz e pode alcançar até 3.9 GHz com Precision Boost. Compatível com o socket AM4, oferece excelente multitarefa e desempenho em cargas intensivas. Seu TDP é de 65W, garantindo eficiência energética. Suporta memória DDR4 até 2933 MHz e é baseado na arquitetura Zen+, melhorando desempenho e eficiência. Inclui o cooler Wraith Stealth para dissipação de calor e operação silenciosa. O Ryzen 5 2600 é ideal para uma ampla gama de aplicações, incluindo jogos e edição de vídeo.",
      discountPercentage: 15,
      basePrice: 400.0,
      imageUrl:
        "https://utfs.io/f/321b1865-3060-4434-942c-5595a06f8e6e-czjyb1.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-amd-ryzen-5-2600",
      featuredProduct: true,
    },
    {
      name: "Processador Intel Core I3 6100",
      description:
        "O Intel Core i3-6100 é um processador da 6ª geração Intel Core (Skylake), ideal para tarefas diárias como navegação e trabalho com documentos. Com 2 núcleos e 4 threads, opera a 3.7 GHz e é compatível com o socket LGA 1151. Suporta memória DDR4 até 2133 MHz e DDR3L até 1600 MHz, oferecendo flexibilidade. Com TDP de 51W, equilibra desempenho e consumo de energia. Inclui gráficos Intel HD Graphics 530 para tarefas gráficas básicas e suporta Intel Hyper-Threading para melhor multitarefa. É uma escolha sólida para desktops domésticos e de escritório.",
      discountPercentage: 35,
      basePrice: 400.0,
      imageUrl:
        "https://utfs.io/f/64fdffc2-c812-428a-ac1f-09d70dc06b10-gjj285.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-core-i3-6100",
      featuredProduct: true,
    },
  ];

  // Create products
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${product.name}`);
  }
};

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao realizar o seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
