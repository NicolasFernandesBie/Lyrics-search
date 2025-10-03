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
      resultadocontainer.innerText = 'Artista não encontrado'
      return
    }

    resultado.data.forEach((musica) => {
      const item = document.createElement('p')
      item.innerText = musica.title

      item.style.cursor = 'pointer'
      item.style.color = 'grey'

      const letraContainer = document.createElement('pre')

      item.addEventListener('click', async () => {
        try {
          const artistaUrl = encodeURIComponent(
            musica.artist.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          )
          const musicaUrl = encodeURIComponent(
            musica.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          )

          const res = await fetch(
            `https://api.lyrics.ovh/v1/${artistaUrl}/${musicaUrl}`
          )
          if (!res.ok) {
            letraContainer.innerText = 'Letra não encontrada'
            return
          }

          const letraData = await res.json()
          letraContainer.innerText = letraData.lyrics || 'Letra não encontrada'
        } catch (err) {
          console.error(err)
          letraContainer.innerText = 'Erro ao buscar a letra'
        }
      })

      resultadocontainer.appendChild(item)
      resultadocontainer.appendChild(letraContainer)
    })
  } catch (error) {
    console.error(error)
    window.alert('Erro ao buscar o artista, tente novamente mais tarde!')
  }
})
