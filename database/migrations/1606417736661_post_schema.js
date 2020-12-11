'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table
      .integer('usuario_id')
      .unsigned()
      .references("id")
      .inTable('usuarios')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable();
      table.string('post',255);
      table.text('nome');
      table.text('descricao');
      table.string('avaliacao');
      table.timestamps();
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
