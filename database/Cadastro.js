const Sequelize = require("sequelize")
const connection = require("./database")

const Cadastro = connection.define('cadastro',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

Cadastro.sync({force: false}).then(()=>{});

module.exports = Cadastro;