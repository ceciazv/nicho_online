'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Livro=use("App/Models/Livro")
/**
 * Resourceful controller for interacting with livros
 */
class LivroController {
  /**
   * Show a list of all livros.
   * GET livros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const livros=await Livro.all()
    return livros
  }

  /**
   * Create/save a new livro.
   * POST livros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {autor, nome, genero_id, editora} = request.only(["autor", "nome","genero_id", "editora"]);
    const livros = await Livro.create({autor, nome, editora, genero_id});
    return livros;
  }

  /**
   * Display a single livro.
   * GET livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const livros = await Livro.findOrFail(params.id);
      return livros;
  }

  /**
   * Update livro details.
   * PUT or PATCH livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const livros = await Livro.findOrFail(params.id);
    const { nome, genero_id, autor, editora } = request.only([
      "nome",
      "genero_id",
      "autor",
      "editora"
    ]);
    livros.nome = nome;
    livros.genero_id= genero_id;
    livros.autor = autor;
    livros.editora = editora;
    await livros.save();
    return livros;
    }
 
  }

  /**
   * Delete a livro with id.
   * DELETE livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

module.exports = LivroController;
