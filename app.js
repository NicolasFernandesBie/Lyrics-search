const form = document.querySelector('form')
const artistainput = document.querySelector('input')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const artista = artistainput.value

  if (!artista) {
    window.alert('artista nâo encontrado')
    return
  }

  const data = await fetch(`https://api.lyrics.ovh/suggest/${artista}`)

  const resultado = await data.json()

  if (data === null) {
    window.alert('artista n encontardo')
  }

  const resultadocontainer = document.getElementById('resultado')

  resultadocontainer.innerText = resultado.data[0].title

  resultado.data.forEach((musica) => {
    const item = document.createElement('p')
    item.innerText = musica.title
    resultadocontainer.appendChild(item)
  })
})
