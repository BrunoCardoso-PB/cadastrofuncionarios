const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Consulta = connection.define('cadastros',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    funcao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cep:{
        type: Sequelize.CHAR,
    },
    endereco:{
        type: Sequelize.STRING,
    },
    bairro:{
        type: Sequelize.STRING,
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    uf:{
        type: Sequelize.STRING,
    }
});

Consulta.sync({force: false}).then(()=>{});

module.exports = Consulta;