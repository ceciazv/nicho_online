'use strict'

const ForumSchema = require('../../database/migrations/1606424139128_forum_schema')
const Forum = require('./Forum')
const User = require('./User')
const Usuario = require('./Usuario')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {

 usuario() 
{
    return this.belongsTo('App/Models/Usuario');

}
forum()
 {
     return this.hasMany('App/Models/Forum');
 }
}
module.exports = Post
