'use strict'

const Forum = require('./Forum');
const Idicacoe = require('./Indicacoes');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Livro extends Model {

forum()
{
    return this.belongTo('App/Models/Forum');
}
indicacoes( )
{
    return this.hasMany('App/Models/Indicacoes');
}
}
module.exports = Livro
