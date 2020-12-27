import * as Knex from 'knex'
import knexfile from '../../../knexfile'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id')
    table.text('title')

    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamps(true, true)
  }).then(() => knex.raw(knexfile.onUpdateTrigger('projects')))
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('projects')
}
