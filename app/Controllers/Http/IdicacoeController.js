'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Indicacoes=use("App/Models/Indicacoes")
/**
 * Resourceful controller for interacting with idicacoes
 */
class IdicacoeController {
  /**
   * Show a list of all idicacoes.
   * GET idicacoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const idicacoes=await Indicacoes.all()
    return idicacoes;
  }

  /**
   * Create/save a new idicacoe.
   * POST idicacoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const indicacoes = request.only(["livros_id"]);
    console.log(auth.user.id);
    return indicacoes;
  }

  /**
   * Display a single idicacoe.
   * GET idicacoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const indicacoes = await Indicacoes.findOrFail(params.id);
    return indicacoes;
  }

  /**
   * Update idicacoe details.
   * PUT or PATCH idicacoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const indicacoes= await Indicacoes.findOrFail(params.id);
    const {livros_id } = request.only(["livros_id"]);
    indicacoes.livros_id= livros_id;
    await indicacoes.save();
    return indicacoes;
    }
 
  /**
   * Delete a idicacoe with id.
   * DELETE idicacoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = IdicacoeController
