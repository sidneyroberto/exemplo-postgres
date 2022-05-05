import { createTables } from './config/db'
import { saveClient } from './controllers/ClientController'
import { Client, getClient } from './models/Client'
import { clients } from './data/clients.json'

const run = async () => {
  await createTables()

  clients.forEach(async (c) => {
    const client: Client = getClient(c)
    await saveClient(client)
  })

  console.log('Mal feito desfeito')
}

run()
