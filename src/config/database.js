module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'node_sequelize',
    define: {
        timestamps: true,
        underscored: true,
    }
};