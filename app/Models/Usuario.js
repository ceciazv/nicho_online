'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {

 forum() 
{
    return this.hasMany('App/Models/Forum')
  }
  post()
 {
    return this.hasMany('App/Models/Post');
}
}
module.exports = Usuario
