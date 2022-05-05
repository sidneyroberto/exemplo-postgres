import sql from '../config/db'
import { Client } from '../models/Client'

export const saveClient = async (client: Client) => {
  const savedClient = await sql`
        insert into clients(name, address, email, cpf, code, phone) 
        values(
            ${client.name},
            ${client.address},
            ${client.email},
            ${client.cpf},
            ${client.code},
            ${client.phone}
        )
    `

  return savedClient
}
