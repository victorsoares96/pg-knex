import * as Knex from 'knex'
import knexfile from '../../../knexfile'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.text('username').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  }).then(() => knex.raw(knexfile.onUpdateTrigger('users')))
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
