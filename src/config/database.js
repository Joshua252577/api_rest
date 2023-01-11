require('dotenv').config();

module.exports = {
    /* SQLite */
    // dialect: 'sqlite',
    // storage: "db.sqlite",

    /* MySQL / MariaDB */
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST || "192.168.25.152",
    port: process.env.DATABASE_PORT || "3306",
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD || "Limber301020",
    database: process.env.DATABASE || "escola",
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',

    /* ALL */
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
};
