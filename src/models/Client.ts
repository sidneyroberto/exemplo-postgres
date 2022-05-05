export type Client = {
  name: string
  address: string
  phone: string
  email: string
  cpf: string
  code: string
}

export const getClient = (jsonObj: any) => {
  const { name, address, phone, email, cpf, code } = jsonObj
  const client: Client = { name, address, phone, email, cpf, code }
  return client
}
