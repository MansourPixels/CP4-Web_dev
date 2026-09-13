# Watchlist — Requisitos

## Objetivo e público

Watchlist é uma plataforma web para pessoas que consomem filmes e séries e precisam descobrir títulos, salvar opções e acompanhar episódios sem perder o progresso. O MVP privilegia o acompanhamento de séries, mas apresenta um catálogo de filmes e séries.

## User stories e aceitação

- Como cinéfilo, quero ver títulos em alta e populares para decidir o que assistir. **Aceite:** a home mostra seções do TMDB, carregamento e erro.
- Como usuário, quero buscar filmes e séries. **Aceite:** a busca retorna apenas essas duas mídias após breve debounce e mostra vazio/erro quando aplicável.
- Como usuário, quero abrir uma obra por URL. **Aceite:** `/movie/:id` e `/tv/:id` mostram dados reais, créditos/recomendações, trailer quando disponível e provedores BR.
- Como espectador de séries, quero marcar episódios. **Aceite:** cada episódio alterna entre visto/não visto, o contador é atualizado e sobrevive ao recarregamento.
- Como organizador, quero salvar, favoritar, marcar assistido e avaliar títulos. **Aceite:** ações podem ser desfeitas, aparecem em Minha Lista e persistem localmente.

## Regras e estados

- TMDB é solicitado em `pt-BR`; provedores são lidos somente da região `BR`.
- Filmes não exibem episódios; séries exibem seletor de temporada.
- Lista e progresso são locais ao navegador, sem login ou nuvem.
- Todas as telas tratam carregamento, ausência de resultados/imagens/provedores e falha de API.
