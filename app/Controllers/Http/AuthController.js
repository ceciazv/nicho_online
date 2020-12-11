"use strict";

const User = use("App/Models/Usuario");

class AuthController {
  async register({ request }) {
    const data = request.only(["nome", "email", "senha"]);
    const user = await User.create(data);
    return user;
  }
  async authenticate({ request, auth }) {
    const { email, senha } = request.all();
    const token = await auth.attempt(email, senha);
    return token;
  }
  
}

module.exports = AuthController;
