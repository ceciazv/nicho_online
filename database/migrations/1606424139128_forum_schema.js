'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForumSchema extends Schema {
  up () {
    this.create('forum', (table) => {
      table.increments()
      table.text('postagens');
      table
      .integer('usuario_id')
      .unsigned()
      .references("id")
      .inTable('usuario')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable();
      table
      .integer('post_id')
      .unsigned()
      .references("id")
      .inTable('post')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable();
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
    this.drop('forum')
  }
}

module.exports = ForumSchema
