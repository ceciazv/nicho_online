'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicacoesSchema extends Schema {
  up () {
    this.create('indicacoes', (table) => {
      table.increments()
      table.text('indica_semana');
      table.text('generos');
      table
      .integer('livros_id')
      .unsigned()
      .references("id")
      .inTable('livros')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('indicacoes')
  }
}

module.exports = IndicacoesSchema
