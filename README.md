# Lyrics Finder

Um pequeno projeto em JavaScript que permite buscar músicas de um artista e visualizar suas letras utilizando a API [Lyrics.ovh](https://lyrics.ovh).

## Funcionalidades

- Buscar músicas digitando o nome de um artista.
- Listar as músicas encontradas.
- Exibir a letra da música ao clicar no título.
- Tratar casos de erro, como artista não encontrado ou letra indisponível.

## Como funciona

1. O usuário digita o nome de um artista em um campo de texto.
2. O app faz uma requisição à API para buscar músicas relacionadas.
3. As músicas aparecem listadas na tela.
4. Ao clicar em uma música, uma nova requisição é feita para buscar sua letra.
5. A letra é exibida logo abaixo do título da música.

## Tecnologias usadas

- HTML
- CSS
- JavaScript
- API Lyrics.ovh

## Como executar

1. Baixe/clone este repositório ou acesse "https://lyric-app-cadeconsig.netlify.app/" .
2. Abra o arquivo `index.html` no navegador.
3. Digite o nome de um artista e clique em buscar.
4. Clique em uma música para visualizar a letra.

## Observações

- Caso a letra da música não esteja disponível na API, será exibida a mensagem "Letra não encontrada".
- O projeto foi feito apenas para fins de estudo, usando uma API pública.
