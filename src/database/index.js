import Sequelize, { model } from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/aluno";
import User from "../models/user";

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
