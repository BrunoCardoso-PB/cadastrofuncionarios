const express = require("express");
const router = express.Router();
const Cadastro = require("./cadastro")

router.get("/cadastrar",(req,res)=>{
    res.render("cadastrar")
})

router.post("/salvarcadastro",(req,res)=>{
    let nome = req.body.nome;
    let cep = req.body.cep;
    let endereco = req.body.endereco;
    let bairro = req.body.bairro;
    let cidade = req.body.cidade;
    let uf = req.body.uf;
    let funcao = req.body.funcao;
    let cpf = req.body.cpf;

    let sucesso = Cadastro.create({
        nome: nome,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        funcao: funcao,
        cpf: cpf,

    }).then(()=>{
        if(sucesso){
            res.redirect("/cadastrar")
        }
    })
})

router.post("/deletarcadastro",(req,res)=>{
    let id = req.body.id
    Cadastro.destroy({
        where: {id:id}
    }).then(cadastro => {
        if(cadastro != undefined){
            res.redirect("/listAll")
        }
    })
})

module.exports = router