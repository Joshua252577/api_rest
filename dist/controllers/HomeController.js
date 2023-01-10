"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class HomeController {
  async index(req, res) {
    const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email']});
    res.json(users);
  }
}

exports. default = new HomeController();
