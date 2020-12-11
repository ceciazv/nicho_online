'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Post=use("App/Models/Post")
/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const post=await Post.all()
    return post
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { nome, descricao, avaliacao, usuario_id} = request.only([ "nome", "descricao", "avaliacao", "usuario_id"]);
    const post= await Post.create({ nome, descricao, avaliacao, usuario_id});
    return post;
  }
  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const post = await Post.findOrFail(params.id);
    return poste;
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const post = await Post.findOrFail(params.id);
    const { nome, avaliacao, descricao, usuario_id } = request.only([
      "nome",
      "usuario_id",
      "descricao",
      "avaliacao"
    ]);
    post.nome = nome;
    post.usuario_id= usuario_id;
    post.descricao = descricao;
    post.avaliacao = avaliacao;
    await post.save();
    return post;
    }
 

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const post = await Post.findOrFail(params.id);
    await post.delete();
    return post;
  }
}


module.exports = PostController;
