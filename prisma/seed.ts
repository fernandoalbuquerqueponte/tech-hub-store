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
      name: "Mouse Gamer XYZ",
      price: 150.0,
      description: "Mouse gamer com alta precisão.",
      discountPercentage: 10,
      basePrice: 165.0,
      imageUrl: "https://example.com/mouse1.jpg",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-gamer-xyz",
    },
    {
      name: "Mouse Wireless ABC",
      price: 120.0,
      description: "Mouse wireless ergonômico.",
      discountPercentage: 5,
      basePrice: 126.0,
      imageUrl: "https://example.com/mouse2.jpg",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-wireless-abc",
    },
    {
      name: "Mouse RGB DEF",
      price: 200.0,
      description: "Mouse com iluminação RGB.",
      discountPercentage: 15,
      basePrice: 235.0,
      imageUrl: "https://example.com/mouse3.jpg",
      categoryId: mouseCategory.id,
      storeId: store.id,
      slug: "mouse-rgb-def",
    },

    // Keyboards
    {
      name: "Teclado Mecânico GHI",
      price: 250.0,
      description: "Teclado mecânico com switches Cherry MX.",
      discountPercentage: 20,
      basePrice: 310.0,
      imageUrl: "https://example.com/keyboard1.jpg",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-mecanico-ghi",
    },
    {
      name: "Teclado Compacto JKL",
      price: 180.0,
      description: "Teclado compacto e leve.",
      discountPercentage: 10,
      basePrice: 200.0,
      imageUrl: "https://example.com/keyboard2.jpg",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-compacto-jkl",
    },
    {
      name: "Teclado Ergonomico MNO",
      price: 220.0,
      description: "Teclado ergonômico com suporte para pulso.",
      discountPercentage: 15,
      basePrice: 260.0,
      imageUrl: "https://example.com/keyboard3.jpg",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-ergonomico-mno",
    },
    {
      name: "Teclado RGB PQR",
      price: 300.0,
      description: "Teclado com iluminação RGB e macros programáveis.",
      discountPercentage: 25,
      basePrice: 400.0,
      imageUrl: "https://example.com/keyboard4.jpg",
      categoryId: keyboardCategory.id,
      storeId: store.id,
      slug: "teclado-rgb-pqr",
    },

    // Processors
    {
      name: "Processador Intel i5",
      price: 1200.0,
      description: "Processador Intel Core i5 de 10ª geração.",
      discountPercentage: 10,
      basePrice: 1333.0,
      imageUrl: "https://example.com/processor1.jpg",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-i5",
    },
    {
      name: "Processador AMD Ryzen 5",
      price: 1100.0,
      description: "Processador AMD Ryzen 5 com 6 núcleos.",
      discountPercentage: 15,
      basePrice: 1294.0,
      imageUrl: "https://example.com/processor2.jpg",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-amd-ryzen-5",
    },
    {
      name: "Processador Intel i7",
      price: 2000.0,
      description: "Processador Intel Core i7 de 10ª geração.",
      discountPercentage: 5,
      basePrice: 2100.0,
      imageUrl: "https://example.com/processor3.jpg",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-intel-i7",
    },
    {
      name: "Processador AMD Ryzen 7",
      price: 1900.0,
      description: "Processador AMD Ryzen 7 com 8 núcleos.",
      discountPercentage: 10,
      basePrice: 2111.0,
      imageUrl: "https://example.com/processor4.jpg",
      categoryId: processorCategory.id,
      storeId: store.id,
      slug: "processador-amd-ryzen-7",
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
