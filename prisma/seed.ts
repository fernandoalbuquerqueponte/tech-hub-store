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
        "O Logitech G403 Prodigy Wireless Gaming Mouse é um mouse de alta performance projetado para gamers que exigem precisão, conforto e durabilidade. Este mouse combina tecnologia avançada e design ergonômico para proporcionar uma experiência de jogo superior. Ele oferece conectividade sem fio de 2.4 GHz extremamente rápida, com uma taxa de resposta de 1ms, garantindo uma experiência de jogo sem atrasos e interrupções. Equipado com o sensor óptico PMW3366, amplamente considerado um dos melhores sensores de mouse para jogos, proporciona uma precisão excepcional e um rastreamento consistente. A sensibilidade é ajustável de 200 a 12.000 DPI, permitindo uma personalização precisa conforme suas preferências. O design ergonômico do mouse é projetado para se ajustar confortavelmente à mão, com uma forma contornada e laterais emborrachadas que garantem um agarre firme e confortável durante longas sessões de jogo. Com a tecnologia de iluminação RGB LIGHTSYNC, você pode personalizar o mouse com até 16,8 milhões de cores, sincronizando os efeitos de iluminação com outros dispositivos Logitech G. A bateria recarregável oferece até 32 horas de jogo contínuo com iluminação padrão. Você pode jogar sem interrupções, e o mouse também pode ser usado com fio enquanto carrega. Com 6 botões programáveis através do software Logitech G HUB, você pode configurar macros e comandos personalizados para otimizar seu desempenho nos jogos. O G403 Prodigy vem com um peso removível de 10g, permitindo que você ajuste o peso total do mouse para se adequar à sua preferência. O Logitech G403 Prodigy Wireless Gaming Mouse é ideal para gamers que buscam um mouse sem fio confiável, preciso e personalizável, que ofereça uma vantagem competitiva em qualquer gênero de jogo.",
      discountPercentage: 20,
      basePrice: 550.0,
      imageUrl:
        "https://utfs.io/f/23cf1371-7e83-4260-b1e8-00b51bf9c045-7ytdp5.png",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-gamer-logitech-g-pro",
    },
    {
      name: "Mouse Gamer Logitech G203 LIGHTSYNC RGB, Efeito de Ondas de Cores, 6 Botões Programáveis e Até 8.000 DPI, Preto",
      description:
        "O Mouse Gamer Logitech G203 LIGHTSYNC RGB é um dispositivo de alta performance, projetado para proporcionar uma experiência de jogo excepcional com precisão e estilo. Este mouse combina tecnologia avançada, personalização e conforto, tornando-o ideal para gamers de todos os níveis. O G203 LIGHTSYNC possui um sensor óptico avançado com uma sensibilidade ajustável de até 8.000 DPI, permitindo movimentos rápidos e precisos. Com 6 botões programáveis, você pode configurar macros e comandos personalizados através do software Logitech G HUB, otimizando seu desempenho nos jogos. A tecnologia LIGHTSYNC RGB oferece efeitos de iluminação dinâmicos e personalizáveis, com até 16,8 milhões de cores. O efeito de ondas de cores pode ser sincronizado com outros dispositivos Logitech G, criando uma experiência de jogo imersiva e visualmente impressionante. O design ergonômico do G203 proporciona conforto durante longas sessões de jogo, com uma forma clássica e botões táteis que garantem uma resposta rápida e precisa. Disponível na cor preta, o mouse combina estilo e funcionalidade, complementando qualquer setup de jogo. O Mouse Gamer Logitech G203 LIGHTSYNC RGB é uma excelente escolha para gamers que procuram um mouse confiável e personalizável, com desempenho de alta qualidade e recursos avançados que proporcionam uma vantagem competitiva em qualquer jogo.",
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
        "O Razer DeathAdder é um mouse gamer icônico, amplamente reconhecido por sua performance excepcional, ergonomia superior e durabilidade. Este mouse foi projetado para proporcionar uma experiência de jogo de alta qualidade, oferecendo precisão, conforto e estilo para gamers de todos os níveis. Equipado com um sensor óptico de alta precisão, o Razer DeathAdder oferece um rastreamento perfeito com até 6.400 DPI (modelos mais recentes chegam até 20.000 DPI), permitindo movimentos rápidos e precisos que são essenciais para jogos competitivos. O formato ergonômico do DeathAdder é projetado para se ajustar confortavelmente à mão, reduzindo a fadiga durante longas sessões de jogo. As laterais emborrachadas garantem um agarre firme e seguro. Personalize seu mouse com a tecnologia Razer Chroma, que oferece 16,8 milhões de cores e uma variedade de efeitos de iluminação que podem ser sincronizados com outros dispositivos Razer para uma experiência de jogo imersiva. Com até 5 botões Hyperesponse programáveis, você pode configurar comandos e macros personalizados através do software Razer Synapse, otimizando seu desempenho em qualquer tipo de jogo. Construído para durar, o Razer DeathAdder possui switches mecânicos Razer de alta qualidade, com uma durabilidade de até 70 milhões de cliques, garantindo que o mouse mantenha sua performance mesmo após longos períodos de uso intenso. O Razer DeathAdder é a escolha perfeita para gamers que procuram um mouse confiável, preciso e confortável. Com suas características avançadas e design ergonômico, ele oferece uma vantagem competitiva em qualquer gênero de jogo, sendo um dos favoritos entre jogadores profissionais e entusiastas de eSports.",
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
        "O ASUS ROG Claymore Core RGB é um teclado mecânico de alta performance, projetado para gamers exigentes que buscam precisão, personalização e durabilidade. Parte da aclamada linha Republic of Gamers (ROG), este teclado oferece recursos avançados e um design elegante que aprimoram a experiência de jogo.O Claymore Core RGB utiliza switches mecânicos Cherry MX, conhecidos por sua resposta tátil e durabilidade excepcionais, garantindo uma atuação precisa e rápida em cada tecla. A iluminação RGB individual para cada tecla oferece uma ampla gama de cores e efeitos, que podem ser personalizados e sincronizados com outros dispositivos ASUS através do software Aura Sync.Seu design compacto e modular permite uma configuração flexível, economizando espaço na mesa e proporcionando uma disposição mais confortável para sessões de jogo prolongadas. O teclado também conta com teclas de atalho dedicadas para controle de mídia e macros programáveis, facilitando a personalização de comandos complexos para otimizar seu desempenho em jogos.A construção robusta com um acabamento em alumínio escovado não só confere uma aparência premium ao teclado, mas também assegura sua resistência e durabilidade. Além disso, o ROG Claymore Core é compatível com o software ROG Armoury II, permitindo ajustes detalhados de perfis, iluminação, macros e muito mais. O ASUS ROG Claymore Core RGB é a escolha ideal para gamers que buscam um teclado mecânico de alta qualidade, com excelente desempenho, personalização avançada e um design elegante que se adapta a qualquer setup de jogo.",
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
        "O HyperX Alloy Elite RGB Mechanical Gaming Keyboard é um teclado mecânico de alta performance, projetado para gamers que buscam precisão, durabilidade e uma experiência de jogo imersiva. Este teclado oferece uma combinação perfeita de funcionalidade avançada e estilo, tornando-o uma escolha popular entre jogadores de todos os níveis. Equipado com switches mecânicos Cherry MX, o Alloy Elite RGB proporciona uma resposta tátil precisa e rápida, ideal para jogos competitivos e digitação. Cada tecla é retroiluminada individualmente com iluminação RGB dinâmica, permitindo a personalização de cores e efeitos através do software HyperX NGenuity. A barra de luz exclusiva com efeitos dinâmicos adiciona um toque visual impressionante ao setup de jogo. O teclado possui um design robusto com estrutura de aço sólida, garantindo durabilidade e estabilidade durante sessões intensas de jogo. Ele também vem com uma confortável barra de descanso de pulso destacável, proporcionando suporte ergonômico para longas horas de uso. Além disso, o Alloy Elite RGB conta com teclas de mídia dedicadas e um botão de controle de iluminação, facilitando o acesso rápido a ajustes de áudio e iluminação sem interromper o jogo. As teclas adicionais de textura especial, otimizadas para jogos, melhoram a aderência e a precisão durante as partidas. Com portas USB 2.0 pass-through, o teclado oferece conveniência adicional, permitindo conectar outros dispositivos diretamente ao teclado. Ele também possui 100% anti-ghosting e rollover de tecla N, garantindo que todas as teclas pressionadas sejam registradas com precisão, mesmo durante as sequências de teclas mais rápidas. O HyperX Alloy Elite RGB Mechanical Gaming Keyboard é ideal para gamers que procuram um teclado mecânico confiável e estiloso, com personalização avançada e recursos práticos que melhoram a experiência de jogo e a produtividade.",
      discountPercentage: 20,
      basePrice: 500.0,
      imageUrl:
        "https://utfs.io/f/94ebe30d-cce9-4c46-8003-23c3f2684701-bhzhs.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-mecanico-hyperx-alloy-elite-rgb",
    },
    {
      name: "Logitech G PRO",
      description:
        "O Logitech G PRO Mechanical Gaming Keyboard é um teclado mecânico de alta performance, desenvolvido em colaboração com jogadores profissionais para oferecer a máxima precisão, rapidez e durabilidade. Este teclado é ideal para gamers competitivos que exigem desempenho superior em cada partida. Equipado com switches mecânicos Romer-G Tactile, o Logitech G PRO proporciona uma atuação rápida e silenciosa, com uma vida útil de até 70 milhões de cliques. Estes switches são projetados para oferecer uma resposta tátil precisa, tornando cada pressionamento de tecla instantaneamente reconhecível e perfeito para jogos de ritmo rápido. O design compacto e tenkeyless (sem o teclado numérico) do G PRO economiza espaço na mesa e facilita o transporte para eventos e competições. O teclado é leve e robusto, com uma estrutura reforçada em aço que proporciona estabilidade e resistência durante as sessões de jogo mais intensas. A iluminação RGB ajustável por tecla permite uma personalização completa com até 16,8 milhões de cores, e os efeitos de iluminação podem ser sincronizados com outros dispositivos Logitech G através do software Logitech G HUB. Este software também permite a programação de macros e a personalização de perfis de jogo, oferecendo controle total sobre as configurações do teclado. Com 26-key rollover e anti-ghosting, o Logitech G PRO garante que todas as teclas pressionadas sejam registradas com precisão, mesmo durante as combinações de teclas mais complexas. Além disso, ele possui um cabo USB destacável para fácil transporte e armazenamento. O Logitech G PRO Mechanical Gaming Keyboard é a escolha perfeita para gamers profissionais e entusiastas que procuram um teclado compacto, confiável e altamente responsivo, capaz de proporcionar uma vantagem competitiva em qualquer cenário de jogo.",
      discountPercentage: 50,
      basePrice: 500.0,
      imageUrl:
        "https://utfs.io/f/ec6e0c0d-322f-4fdc-b274-94c65cdf8115-k57z9t.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-gamer-logitech-g-pro",
    },
    {
      name: "Teclado Mecânico COUGAR ULTIMUS RGB",
      description:
        "O Teclado Mecânico COUGAR ULTIMUS RGB é uma escolha robusta e estilosa para gamers que buscam desempenho superior, durabilidade e personalização avançada. Este teclado combina tecnologia de ponta com um design resistente, tornando-se uma excelente opção para jogadores de todos os níveis. Equipado com switches mecânicos de alta qualidade, o COUGAR ULTIMUS RGB oferece uma resposta tátil precisa e rápida, ideal para jogos competitivos e digitação. Cada tecla é retroiluminada individualmente com iluminação RGB, permitindo uma vasta personalização de cores e efeitos. A iluminação pode ser ajustada através de teclas de atalho ou pelo software COUGAR UIX, proporcionando uma experiência de jogo imersiva e visualmente impressionante. A construção robusta do ULTIMUS RGB é reforçada por uma placa superior de metal, garantindo durabilidade e estabilidade durante as sessões de jogo mais intensas. Seu design é à prova de respingos, oferecendo uma camada adicional de proteção contra acidentes com líquidos. O teclado conta com 104 teclas de layout completo, incluindo teclas de função dedicadas para controle de mídia e acesso rápido a diversas funções. Ele também suporta 100% anti-ghosting e N-key rollover, garantindo que todas as teclas pressionadas sejam registradas com precisão, mesmo em combinações de teclas complexas. Além disso, o COUGAR ULTIMUS RGB possui um cabo USB trançado, resistente e durável, que assegura uma conexão estável e prolonga a vida útil do teclado. O teclado também é compatível com o software COUGAR UIX, que permite a programação de macros e a personalização de perfis de jogo, oferecendo controle total sobre as configurações. O Teclado Mecânico COUGAR ULTIMUS RGB é ideal para gamers que procuram um teclado mecânico resistente, altamente personalizável e confiável. Com suas características avançadas e design robusto, ele proporciona uma vantagem competitiva em qualquer tipo de jogo, sendo uma adição valiosa para qualquer setup de jogo.",
      discountPercentage: 50,
      basePrice: 700.0,
      imageUrl:
        "https://utfs.io/f/e94746de-615f-41d1-8ca6-649b8ef74a70-t0299r.png",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-mecanico-cougar-ultimus-rgb",
    },

    // Processors
    {
      name: "Intel Core i5-8600K Desktop Processor 6 Cores up to 4.3 GHz Unlocked LGA 1151 300 Series 95W",
      description:
        "O Intel Core i5-8600K é um processador de desktop de alta performance, projetado para entusiastas e gamers que buscam desempenho avançado. Este processador conta com 6 núcleos e 6 threads, oferecendo uma velocidade de clock base de 3.6 GHz e podendo atingir até 4.3 GHz com a tecnologia Intel Turbo Boost. Sendo um processador desbloqueado, ele permite overclocking para maximizar ainda mais o desempenho, desde que utilizado com uma placa-mãe compatível da série 300 e resfriamento adequado. Compatível com o socket LGA 1151, o i5-8600K se destaca pela eficiência energética com um TDP (Thermal Design Power) de 95W. Ele suporta memória DDR4 de até 2666 MHz e conta com gráficos integrados Intel UHD Graphics 630, que são suficientes para tarefas gráficas básicas e reprodução de mídia em alta definição. Ideal para tarefas multitarefas, jogos e criação de conteúdo, o i5-8600K proporciona uma experiência equilibrada entre custo e performance.",
      discountPercentage: 35,
      basePrice: 1200.0,
      imageUrl:
        "https://utfs.io/f/8ecab1da-cb46-43ce-b400-651df5a92d3e-pn33xr.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-i5-8600k",
    },
    {
      name: "Intel Core i7-7700K Desktop Processor 4 Cores up to 4.5 GHz Unlocked LGA 1151 100200 Series 91W",
      description:
        "O Intel Core i7-7700K é um processador de desktop de alta performance, ideal para gamers, criadores de conteúdo e entusiastas de tecnologia que buscam um desempenho superior. Este processador possui 4 núcleos e 8 threads, operando a uma velocidade de clock base de 4.2 GHz, que pode ser impulsionada até 4.5 GHz com a tecnologia Intel Turbo Boost. Sendo um processador desbloqueado, ele permite overclocking, oferecendo flexibilidade para ajustar o desempenho conforme a necessidade, desde que utilizado com uma placa-mãe compatível das séries 100 ou 200 e um sistema de resfriamento eficiente. Compatível com o socket LGA 1151, o i7-7700K se beneficia de um TDP (Thermal Design Power) de 91W, equilibrando potência e eficiência energética. Ele suporta memória DDR4 de até 2400 MHz e inclui gráficos integrados Intel HD Graphics 630, que são suficientes para tarefas gráficas básicas e reprodução de mídia em alta definição. O i7-7700K é uma escolha robusta para quem procura um processador capaz de lidar com tarefas intensivas, multitarefas, jogos de última geração e produção de mídia, proporcionando uma experiência de uso fluida e responsiva.",
      discountPercentage: 50,
      basePrice: 1500.0,
      imageUrl:
        "https://utfs.io/f/6522cb2c-e28b-4d13-ac0f-49fd60348511-amyvyh.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-core-i7-7700k",
    },
    {
      name: "Processador AMD Ryzen 5 2600 3.4GHz (3.9GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, YD2600BBAFBOX, S Video",
      description:
        "O AMD Ryzen 5 2600 é um processador de desktop altamente eficiente, projetado para atender às necessidades de gamers, criadores de conteúdo e usuários avançados. Equipado com 6 núcleos e 12 threads, este processador opera a uma velocidade de clock base de 3.4 GHz, podendo atingir até 3.9 GHz com a tecnologia Precision Boost. Compatível com o socket AM4, o Ryzen 5 2600 se destaca pela sua capacidade de multitarefa e desempenho em cargas de trabalho intensivas, oferecendo uma excelente relação custo-benefício. Este processador possui um TDP (Thermal Design Power) de 65W, o que o torna uma escolha eficiente em termos de energia. Ele suporta memória DDR4 de até 2933 MHz e é baseado na arquitetura Zen+, que proporciona melhorias em desempenho e eficiência energética em comparação com a geração anterior. Incluído na embalagem está o cooler Wraith Stealth, que garante uma dissipação de calor eficiente e operação silenciosa, permitindo que o processador mantenha um desempenho estável mesmo sob cargas de trabalho elevadas. Com o código de produto YD2600BBAFBOX, o Ryzen 5 2600 é uma excelente escolha para quem busca um processador robusto e versátil para uma variedade de aplicações, desde jogos e edição de vídeo até desenvolvimento de software e outras tarefas exigentes.",
      discountPercentage: 15,
      basePrice: 400.0,
      imageUrl:
        "https://utfs.io/f/321b1865-3060-4434-942c-5595a06f8e6e-czjyb1.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-amd-ryzen-5-2600",
    },
    {
      name: "Processador Intel Core I3 6100",
      description:
        "O Intel Core i3-6100 é um processador de desktop da 6ª geração Intel Core, também conhecida como Skylake, ideal para usuários que procuram uma solução acessível e eficiente para tarefas do dia a dia, como navegação na internet, trabalho com documentos, reprodução de mídia e aplicações leves. Este processador possui 2 núcleos e 4 threads, operando a uma velocidade de clock fixa de 3.7 GHz. Compatível com o socket LGA 1151, o i3-6100 suporta memória DDR4 de até 2133 MHz e DDR3L de até 1600 MHz, oferecendo flexibilidade na escolha de módulos de memória. Com um TDP (Thermal Design Power) de 51W, ele proporciona um equilíbrio eficiente entre desempenho e consumo de energia. O processador inclui gráficos integrados Intel HD Graphics 530, que são adequados para tarefas gráficas básicas, como visualização de vídeos em alta definição e jogos casuais. Além disso, ele suporta a tecnologia Intel Hyper-Threading, permitindo uma melhor utilização dos recursos do processador em multitarefas. O Intel Core i3-6100 é uma escolha sólida para sistemas de desktop domésticos e de escritório que necessitam de um desempenho confiável e eficiente para uma ampla gama de aplicações cotidianas.",
      discountPercentage: 35,
      basePrice: 400.0,
      imageUrl:
        "https://utfs.io/f/64fdffc2-c812-428a-ac1f-09d70dc06b10-gjj285.png",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-core-i3-6100",
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
