'use strict'

const Livro = require('./Livro');
const Post = require('./Post');
const Usuario = require('./Usuario');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Forum extends Model {

usuario() 
{
    return this.belongsTo('App/Models/Usuario');
}
 post()
 {
     return this.hasMany('App/Models/Post');
 }
 livro()
 {
     return this.hasMany('App/Models/Livro')
 }

}
module.exports = Forum;

