'use strict'

const Livro = require('./Livro')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Indicacoes extends Model {
livro()
{
    return this.belongTo('App/Models/Livro');
}
}
module.exports = Indicacoes
