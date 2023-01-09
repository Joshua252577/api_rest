import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import home_routes from "./src/routes/Home_routes";
import user_routes from "./src/routes/User_routes";
import token_routes from "./src/routes/Token_routes";
import aluno_routes from "./src/routes/Aluno_routes";
import photo_routes from "./src/routes/Photo_routes";
class App {
  constructor() {
    this.app = express();
    this.midllewares();
    this.routes();
  }

  midllewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home_routes);
    this.app.use('/users/', user_routes);
    this.app.use('/tokens/', token_routes);
    this.app.use('/alunos/', aluno_routes);
    this.app.use('/photos/', photo_routes);
  }

};

export default new App().app;
