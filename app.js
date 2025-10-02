const form = document.querySelector('form')
const artistainput = document.querySelector('input')
const resultadocontainer = document.getElementById('resultado')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const artista = artistainput.value.trim()

  if (!artista) {
    resultadocontainer.innerText = 'digite nome do artista'
    return
  }
  try {
    const data = await fetch(`https://api.lyrics.ovh/suggest/${artista}`)
    const resultado = await data.json()
    resultadocontainer.innerHTML = ''

    if (!resultado.data || resultado.data.length === 0) {
      resultadocontainer.innerText = 'Artista não encontrado '
      return
    }

    resultado.data.forEach((musica) => {
      const item = document.createElement('p')
      item.innerText = musica.title
      resultadocontainer.appendChild(item)
    })
  } catch (error) {
    console.error(error)
    window.alert('Erro ao buscar o artista, tente novamente mais tarde!')
  }
})
