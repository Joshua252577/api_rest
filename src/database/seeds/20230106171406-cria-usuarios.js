const bcryptjs = require('bcryptjs');
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users',
    [
      {
        nome: 'Marcos',
        email: 'marcos@gmail.com',
        password_hash: await bcryptjs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Marcos1',
        email: 'marcos1@gmail.com',
        password_hash: await bcryptjs.hash('102030102030', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Marcos2',
        email: 'marcos2@gmail.com',
        password_hash: await bcryptjs.hash('1511097123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {

    }), down: () => {},
};
