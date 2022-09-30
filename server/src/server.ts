import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Agora vai! 1' },
    { id: 2, name: 'Agora vai! 2' },
    { id: 3, name: 'Agora vai! 3' },
    { id: 4, name: 'Agora vai! 4' },
    { id: 5, name: 'Agora vai! 5' }
  ])
})

app.listen(3333)
