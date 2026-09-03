export const featuredProjects = {
  pt: [
    {
      id: 'distribuidora',
      name: 'Distribuidora — Vitrine + API',
      tagline: 'Aplicação full stack de catálogo de produtos com autenticação por papéis',
      problem:
        'Distribuidoras que atendem clientes por WhatsApp costumam depender de catálogos estáticos (PDF, planilha, mensagens soltas), sem controle de quem pode alterar preços e sem histórico de quem pediu o quê.',
      solution:
        'Uma aplicação dividida em dois repositórios independentes — API REST em Spring Boot e front-end em React — comunicando-se via HTTP com autenticação JWT. Administradores cadastram produtos e imagens; clientes autenticados navegam pelo catálogo e enviam pedidos de orçamento, que caem numa fila de mensagens visível para o vendedor.',
      highlights: [
        'Autenticação JWT com dois papéis (ADMIN / USER) aplicados via Spring Security, com regras de acesso testadas por MockMvc subindo o contexto de segurança real — não apenas o service isolado.',
        'Arquitetura em camadas (controller → service → repository) com DTOs isolando a API do modelo JPA.',
        'Upload de imagens via multipart/form-data, servidas como arquivos estáticos e referenciadas pelo catálogo.',
        'Front-end em React consumindo a API através de um client HTTP centralizado, com contexto de autenticação e de catálogo separados.',
        'Integração com WhatsApp para o fluxo de "solicitar orçamento", ligando o catálogo a um canal de venda real.',
        'Cobertura de testes automatizados nas duas camadas: JUnit + Mockito no backend (services e controllers), Vitest + Testing Library no front-end (fluxos de login e gestão de produtos).',
      ],
      stack: {
        Frontend: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Vitest'],
        Backend: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA'],
        Database: ['PostgreSQL'],
        Auth: ['JWT', 'RBAC (ADMIN / USER)'],
      },
      links: {
        backend: 'https://github.com/jpnobree/distribuidora-backend',
        frontend: 'https://github.com/jpnobree/distribuidora-frontend',
        demo: null,
      },
    },
    {
      id: 'projeto-marte',
      name: 'Missão Espacial: Pouso Lunar',
      tagline: 'Simulação em Java no terminal, com IA simples, persistência e ranking',
      problem:
        'Consolidar, num projeto fechado e sem framework, os pilares de orientação a objetos e manipulação de arquivos — sem a rede de segurança de um CRUD com banco de dados por trás.',
      solution:
        'Um jogo de nave em ambiente de terminal onde o jogador navega por um mapa 2D, resgata passageiros de três tipos (com pontuações diferentes), desvia de asteroides e de inimigos com movimentação própria, e precisa pousar de volta na origem antes de ficar sem combustível ou sem vidas.',
      highlights: [
        'Hierarquia de classes com herança e polimorfismo (Passageiro → Astronauta / Engenheiro / Professor), cada um com pontuação própria.',
        'Enum de dificuldade controlando combustível inicial, número de vagas e quantidade de obstáculos.',
        'Inimigos com movimentação própria a cada turno, exigindo controle de estado do mapa a cada jogada.',
        'Persistência de ranking em JSON, com leitura e ordenação das top 5 pontuações entre execuções.',
      ],
      stack: {
        Backend: ['Java 17', 'POO', 'Enums', 'JSON (leitura/escrita)'],
      },
      links: {
        repo: 'https://github.com/jpnobree/ProjetoMarte',
        demo: null,
      },
    },
  ],
  en: [
    {
      id: 'distribuidora',
      name: 'Distribuidora — Storefront + API',
      tagline: 'Full-stack product catalog application with role-based authentication',
      problem:
        'Wholesale distributors who serve customers over WhatsApp typically rely on static catalogs (PDFs, spreadsheets, loose messages), with no control over who can change prices and no record of who ordered what.',
      solution:
        'An application split into two independent repositories — a Spring Boot REST API and a React front-end — communicating over HTTP with JWT authentication. Admins register products and images; authenticated customers browse the catalog and send quote requests, which land in a message queue visible to the seller.',
      highlights: [
        'JWT authentication with two roles (ADMIN / USER) enforced through Spring Security, with access rules tested by MockMvc against the real security context — not just the isolated service layer.',
        'Layered architecture (controller → service → repository) with DTOs isolating the API from the JPA model.',
        'Image uploads via multipart/form-data, served as static files and referenced by the catalog.',
        'React front-end consuming the API through a centralized HTTP client, with separate authentication and catalog contexts.',
        'WhatsApp integration for the "request a quote" flow, connecting the catalog to a real sales channel.',
        'Automated test coverage on both layers: JUnit + Mockito on the backend (services and controllers), Vitest + Testing Library on the front-end (login and product-management flows).',
      ],
      stack: {
        Frontend: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Vitest'],
        Backend: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA'],
        Database: ['PostgreSQL'],
        Auth: ['JWT', 'RBAC (ADMIN / USER)'],
      },
      links: {
        backend: 'https://github.com/jpnobree/distribuidora-backend',
        frontend: 'https://github.com/jpnobree/distribuidora-frontend',
        demo: null,
      },
    },
    {
      id: 'projeto-marte',
      name: 'Space Mission: Lunar Landing',
      tagline: 'Terminal-based Java simulation with simple AI, persistence, and a leaderboard',
      problem:
        'Consolidate the pillars of object-oriented programming and file handling in a self-contained, framework-free project — without the safety net of a CRUD backed by a database.',
      solution:
        'A terminal-based spaceship game where the player navigates a 2D map, rescues three types of passengers (each worth different points), dodges asteroids and enemies with their own movement, and must land back at the origin before running out of fuel or lives.',
      highlights: [
        'Class hierarchy with inheritance and polymorphism (Passenger → Astronaut / Engineer / Teacher), each with its own point value.',
        'A difficulty enum controlling starting fuel, passenger capacity, and obstacle count.',
        'Enemies with their own movement each turn, requiring map-state tracking on every move.',
        'Leaderboard persistence in JSON, reading and sorting the top 5 scores across runs.',
      ],
      stack: {
        Backend: ['Java 17', 'OOP', 'Enums', 'JSON (read/write)'],
      },
      links: {
        repo: 'https://github.com/jpnobree/ProjetoMarte',
        demo: null,
      },
    },
  ],
}

export const otherProjects = {
  pt: [
    {
      name: 'Pokédex',
      description:
        'Consumo da PokéAPI em JavaScript puro, com busca e listagem renderizadas diretamente no DOM — fundamentos de front-end sem framework.',
      stack: ['JavaScript', 'HTML', 'CSS', 'Fetch API'],
      repo: 'https://github.com/jpnobree/pokedex',
    },
    {
      name: 'School Management System',
      description:
        'Sistema de gestão escolar em Java para praticar modelagem orientada a objetos entre entidades relacionadas (alunos, turmas, professores).',
      stack: ['Java', 'POO'],
      repo: 'https://github.com/jpnobree/SchoolManagementSystem',
    },
    {
      name: 'Bank System',
      description:
        'Simulação de operações bancárias em Java — depósito, saque e transferência — para treinar lógica de negócio e validação de estado.',
      stack: ['Java', 'POO'],
      repo: 'https://github.com/jpnobree/BankSystem',
    },
    {
      name: 'WaterEco',
      description:
        'Aplicação desenvolvida em projeto acadêmico para conscientização sobre consumo e desperdício de água.',
      stack: ['Java'],
      repo: 'https://github.com/jpnobree/WaterEco',
    },
  ],
  en: [
    {
      name: 'Pokédex',
      description:
        'PokéAPI consumption in vanilla JavaScript, with search and listing rendered directly to the DOM — front-end fundamentals, no framework.',
      stack: ['JavaScript', 'HTML', 'CSS', 'Fetch API'],
      repo: 'https://github.com/jpnobree/pokedex',
    },
    {
      name: 'School Management System',
      description:
        'A school management system in Java, built to practice object-oriented modeling across related entities (students, classes, teachers).',
      stack: ['Java', 'OOP'],
      repo: 'https://github.com/jpnobree/SchoolManagementSystem',
    },
    {
      name: 'Bank System',
      description:
        'A simulation of banking operations in Java — deposit, withdrawal, and transfer — built to practice business logic and state validation.',
      stack: ['Java', 'OOP'],
      repo: 'https://github.com/jpnobree/BankSystem',
    },
    {
      name: 'WaterEco',
      description:
        'An application built for an academic project to raise awareness about water consumption and waste.',
      stack: ['Java'],
      repo: 'https://github.com/jpnobree/WaterEco',
    },
  ],
}
