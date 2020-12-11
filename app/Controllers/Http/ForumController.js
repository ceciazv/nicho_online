'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Forum=use("App/Models/Forum")
/**
 * Resourceful controller for interacting with forums
 */
class ForumController {
  /**
   * Show a list of all forums.
   * GET forums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const forums=await Forum.all()
    return forums
  }


  /**
   * Create/save a new forum.
   * POST forums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const {postagens, livros_id, post_id} = request.only(["postagens", "livros_id", "post_id" ]);
    const forum = await Forum.create({postagens, usuario_id:auth.user.id, post_id, livros_id, });
    return forum;
  }


  /**
   * Display a single forum.
   * GET forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const forums = await Forum.findOrFail(params.id);
    return forums;
  }

  /**
   * Update forum details.
   * PUT or PATCH forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const forums = await Forum.findOrFail(params.id);
    const { postagens, usuario_id, post_id, livros_id} = request.only([
      "postagens",
      "usuario_id",
      "post_id",
      "livros_id"
    ]);
    forum.nome = nome;
    forum.usuario_id= usuario_id;
    forum.postagens = postagens;
    forum.post_id = post_id;
    forum.livros_id = livros_id;
    await Forum.save();
    return forums;
    }
  

  /**
   * Delete a forum with id.
   * DELETE forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ForumController
