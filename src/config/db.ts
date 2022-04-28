import postgres from "postgres";

const sql = postgres('postgres://postegres:postgres@localhost/exemplopostegres')

export const createTables = async () => {
    await sql`
        
    `
}

export default sql