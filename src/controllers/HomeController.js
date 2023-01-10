import User from '../models/User';

class HomeController {
  async index(req, res) {
    const users = await User.findAll({ attributes: ['id', 'nome', 'email']});
    res.json(users);
  }
}

export default new HomeController();
