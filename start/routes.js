'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});
Route.post("/register","AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");
Route.resource("livros","LivroController").apiOnly();

Route.group(() => {
  Route.get("/genero", "GeneroController.index");
  Route.resource("post", "PostController").apiOnly();
  Route.resource("forum","ForumController").apiOnly();
  Route.resource("indicacoes","Idicacoentroller").apiOnly();
 
  Route.resource("post", "PostController").apiOnly();

}).middleware(["auth"]);
