import Sequelize, {Model} from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 10],
            msg: 'nome precisa ter entre 3 a 10 caracteres!'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 10],
            msg: 'sobrenome precisa ter entre 3 a 10 caracteres!'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'E-mail já existente!'
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido!'
          }
        }
      },
      idade:  {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      peso: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 10],
            msg: 'nome precisa ter entre 3 a 10 caracteres!'
          }
        }
      },
      altura: {
        type: Sequelize.STRING,
        defaultValue: ''
      }

    }, {
      sequelize
    });
    return this;
  }
}
