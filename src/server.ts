import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.send()
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`
  App name listening on port 3000
  `)
})
