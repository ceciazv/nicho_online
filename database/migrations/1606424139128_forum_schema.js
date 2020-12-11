'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForumSchema extends Schema {
  up () {
    this.create('forums', (table) => {
      table.increments()
      table.text('postagens');
      table
      .integer('usuario_id')
      .unsigned()
      .references("id")
      .inTable('usuarios')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable();
      table
      .integer('post_id')
      .unsigned()
      .references("id")
      .inTable('posts')
      .onUpdate('cascade')
      .onDelete('cascade')
      .nullable();
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
    this.drop('forums')
  }
}

module.exports = ForumSchema
