'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('post', (table) => {
      table.increments()
      table
      .integer('usuario_id')
      .unsigned()
      .references("id")
      .inTable('usuario')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable();
      table.string('post',255);
      table.text('nome');
      table.date('data');
      table.text('descricao');
      table.string('avaliacao');
      table.timestamps();
    })
  }

  down () {
    this.drop('post')
  }
}

module.exports = PostSchema
