export const featuredProjects = [
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
]

export const otherProjects = [
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
]
