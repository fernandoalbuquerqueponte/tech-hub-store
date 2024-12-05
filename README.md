# Tech Hub Store

**Bem-vindo ao nosso e-commerce de tecnologia!** 🚀 Este projeto foi desenvolvido para oferecer a **melhor experiência de compra online,** com destaque para produtos inovadores e tecnologia de ponta, tudo apresentado de maneira moderna e interativa.

## 🎨 Funcionalidades Principais

- **Interface Responsiva**: Design otimizado para dispositivos móveis, tablets e desktops, garantindo uma experiência de usuário consistente e intuitiva.
- **Exibição de Produtos**: E-commerce completo que lista produtos com informações detalhadas, utilizando tecnologias modernas como **Next.js 14**, **TypeScript**, **Prisma** e **PostgreSQL**.
- **Gerenciamento de Carrinho de Compras**: Implementação de funcionalidades de adicionar, remover e atualizar itens, com estado gerenciado de forma eficiente.
- **Pagamentos Online**: Integração com o gateway **Stripe** para processar transações com segurança e eficiência.
- **Webhooks Stripe**: Recebimento e processamento em tempo real de notificações de eventos de pagamento, garantindo sincronização e atualização imediata no sistema.
- **Autenticação de Usuário**: Login seguro via Google, utilizando **NextAuth**.
- **Estilização Moderna**: Interface construída com **TailwindCSS** para design customizado e **Shadcn/ui** para consistência e elegância nos componentes.
- **Gerenciamento de Banco de Dados**: Uso do **Prisma ORM** para lidar com o banco de dados **PostgreSQL**, permitindo operações robustas e escaláveis.
- **Deploy Rápido e Confiável**: Projeto hospedado na **Vercel**, garantindo alta performance e disponibilidade.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza um conjunto moderno de tecnologias, incluindo:

### Frontend:

- [**React**](https://reactjs.org/) e [**Next.js**](https://nextjs.org/)
- [**Tailwind CSS**](https://tailwindcss.com/): Estilização moderna e eficiente.
- [**Shadcn/ui**](https://ui.shadcn.com/): Animações interativas.
- [**TypeScript**](https://www.typescriptlang.org/): Tipagem estática para maior confiabilidade no código.

### Backend:

- Configurado com [**Next.js**](https://nextjs.org/) para renderização no lado do servidor (SSR).
- Configurado com [**Prisma**](https://www.prisma.io/) para acesso ao banco de dados e integração otimizada com [**Next.js**](https://nextjs.org/) para SSR.
- Integrado ao [**Prisma**](https://www.prisma.io/) com [**PostgreSQL**](https://www.postgresql.org/) para gestão eficiente de dados.
- [**NextAuth**](https://next-auth.js.org/): Autenticação segura e flexível.

### **Pagamentos**:

- [**Stripe**](https://stripe.com/): Integração para gerenciamento de pagamentos online.

### Outros:

- [**React Hook Form**](https://react-hook-form.com/): Manipulação eficiente de formulários.
- [**Lucide React**](https://lucide.dev/): Ícones modernos.

## 🚀 Rodando o Projeto Localmente

Siga os passos abaixo para executar este projeto no seu ambiente local.

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/fernandoalbuquerqueponte/tech-hub-store.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd tech-hub-store
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```
├── app/
│ ├── (home)/ # Página inicial
│ ├── _components/ # Componentes reutilizáveis
│ ├── _data/ # Camada de dados
│ ├── _lib/ # Lógica compartilhada
│ ├── _providers/ # Configuração de provedores globais
│ ├── api/ # Endpoints da API
│ ├── deliveries/ # Páginas de entregas
│ ├── product/ # Páginas relacionadas a produtos
│ ├── globals.css # Estilos globais
│ └── layout.tsx # Layout principal
├── prisma/
│ ├── schema.prisma # Esquema do banco de dados
├── public/
│ ├── (imagens e recursos estáticos)
├── README.md # Documentação do projeto
├── env.ts # Validação e transformação de variáveis de ambiente
├── next.config.mjs # Configuração do Next.js
├── tailwind.config.ts # Configuração do Tailwind CSS
└── tsconfig.json # Configuração do TypeScript
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme necessário.

## Contato

<p>
	📫 Fernando Albuquerque( Desenvolvedor ) -
<a href="https://www.linkedin.com/in/fernando-albuquerque-poonte/">
  <img align="center" alt="Fernando's LinkedIn" width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg" />
</a>
</p>
