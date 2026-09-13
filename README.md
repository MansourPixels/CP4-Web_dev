# Watchlist

> Plataforma web responsiva para descobrir filmes e séries, organizar a coleção pessoal e acompanhar episódios assistidos.

## Sobre o projeto

O **Watchlist** é o MVP acadêmico do desafio “Criando o novo TV Time”. Ele ajuda pessoas que querem descobrir algo para assistir, organizar recomendações e não perder o ponto em que pararam numa série.

A aplicação usa a API do [The Movie Database (TMDB)](https://www.themoviedb.org/) para dados reais de catálogo. Lista, favoritos, notas, comentários e progresso ficam persistidos no `localStorage` do navegador, sem exigir conta ou backend.

## Problema e solução

Quem assiste a muitos filmes e séries costuma acumular recomendações, esquecer episódios já vistos e não saber em qual streaming um título está disponível. O Watchlist centraliza esse fluxo:

- Descoberta de títulos em alta e populares;
- Busca por filmes e séries;
- Detalhe com sinopse, notas, trailer, recomendações e provedores no Brasil;
- Lista pessoal com “quero assistir”, favoritos e assistidos;
- Avaliação em estrelas e comentário pessoal por obra;
- Progresso por temporada e episódio, com séries em andamento.

## Funcionalidades

| Área | Recursos |
| --- | --- |
| Descobrir | Tendências semanais, filmes populares e séries populares via TMDB. |
| Buscar | Busca com debounce de 400 ms e estados de carregamento, vazio e erro. |
| Detalhe | Rotas dinâmicas, trailer, recomendações e “onde assistir”. |
| Organização | Adicionar à lista, favoritar, marcar assistido e avaliar. |
| Comentários | Criar, salvar, exibir e editar comentário pessoal. |
| Séries | Seleção de temporada e episódios assistidos. |
| Persistência | Dados pessoais mantidos após recarregar a página. |

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Descoberta. |
| `/buscar?q=termo` | Busca por filmes e séries. |
| `/movie/:id` | Detalhe dinâmico de filme. |
| `/tv/:id` | Detalhe dinâmico de série e episódios. |
| `/minha-lista` | Coleção local, filtros e séries em andamento. |

## Tecnologias

- React 18 e Vite;
- React Router DOM;
- Tailwind CSS;
- Lucide React;
- TMDB API;
- Vitest e React Testing Library;
- localStorage.

## Estrutura

```text
src/
├── api/           # Cliente do TMDB
├── components/    # Layout, cards e grids reutilizáveis
├── hooks/         # Persistência e biblioteca pessoal
├── pages/         # Páginas por rota
├── test/          # Setup dos testes
├── App.jsx        # Rotas
└── main.jsx       # Entrada React

docs/
├── requirements.md
├── architecture.md
└── references/references.md
```

A coleção usa `watchlist:v1` para títulos, status, notas e comentários, e `watchlist:episodes:v1` para o progresso de episódios.

## Pré-requisitos

- Node.js 18 ou superior;
- npm 9 ou superior;
- **API Read Access Token** do TMDB.

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie o arquivo local de variáveis:

   ```bash
   cp .env.example .env.local
   ```

3. Informe seu token no `.env.local`:

   ```env
   VITE_TMDB_ACCESS_TOKEN=seu_api_read_access_token
   ```

4. Inicie o projeto:

   ```bash
   npm run dev
   ```

Acesse a URL mostrada pelo Vite, normalmente `http://localhost:5173`.

> Não envie `.env.local` ao repositório. Na Vercel, cadastre a mesma variável nas configurações do projeto.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Ambiente de desenvolvimento. |
| `npm run build` | Bundle de produção em `dist/`. |
| `npm run test` | Executa os testes uma vez. |
| `npm run test:watch` | Testes em modo observação. |

## Testes e qualidade

A suíte automatizada cobre a persistência da biblioteca: salvar status e avaliação no `localStorage`, além de alternar episódios assistidos. A validação manual deve cobrir busca, navegação por teclado, carregamento, erro, dados ausentes, persistência e responsividade em 375 px, 768 px, 1024 px e 1440 px.

## Spec Driven Development

- [Requisitos](docs/requirements.md): objetivo, público, stories, critérios e regras;
- [Arquitetura](docs/architecture.md): rotas, componentes, props, estados e efeitos;
- [Referências visuais](docs/references/references.md): Netflix, Letterboxd, Notion e o design estático do projeto.

## Design e acessibilidade

O design adapta as telas em `telas_estaticas/`: superfícies escuras, CTA âmbar, cards de pôster e layout mobile-first. Botões de ícone têm rótulos acessíveis e a interface possui foco visível por teclado.

## Limitações do MVP

- Não há autenticação nem sincronização entre navegadores;
- A coleção pertence apenas ao navegador atual;
- Provedores de streaming dependem da disponibilidade retornada pelo TMDB para BR;
- A credencial do TMDB é usada no cliente por ser um projeto acadêmico sem backend.

## Uso de IA

IA foi usada para apoiar requisitos, documentação SDD, estrutura inicial e revisão de código. As decisões de escopo, interface e produto foram feitas para este projeto acadêmico.

## Integrantes

- Nome do integrante 1 — RM
- Nome do integrante 2 — RM
- Nome do integrante 3 — RM

> Atualize os integrantes antes da entrega.

## Créditos

Dados e imagens fornecidos por [TMDB](https://www.themoviedb.org/). Este produto usa a API do TMDB, mas não é endossado ou certificado pelo TMDB.
