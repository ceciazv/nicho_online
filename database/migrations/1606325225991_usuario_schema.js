'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuario', (table) => {
      table.increments()
      table.string('nome', 88).notNullable().unique
      table.text('email', 254).notNullable().unique
      table.string('senha', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario')
  }
}

module.exports = UsuarioSchema
