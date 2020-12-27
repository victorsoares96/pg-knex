import knex from 'knex'
import 'dotenv/config'
import knexfile from '../../knexfile'

const db = knex(knexfile.development)

export default db
