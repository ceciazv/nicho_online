'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivrosSchema extends Schema {
  up () {
    this.create('livros', (table) => {
      table.increments()
      table.text('nome');
      table.text('genero');
      table.text('autor');
      table.text('editora');
      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}

module.exports = LivrosSchema
