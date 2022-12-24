const express = require("express");
const router = express.Router();
const Cadastro = require("./cadastro")

router.get("/cadastrar",(req,res)=>{
    res.render("cadastrar")
})

router.get("/atualizarCadastro",(req,res)=>{
    res.render("atualizarCadastro")
})

router.get("/atualiza",(req,res)=>{
    res.render("atualiza")
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

/***************teste atualizar cadastro ***********/

router.post("/atualizar",(req, res)=>{
    let cpf = req.body.cpf
    Cadastro.findAll({ // o findOne procura 1 registre
        where: {cpf:cpf} // comparando se no banco o cpf é igual o cpf da váriavel digitada
    }).then(cadastro => {
        if((cadastro != undefined) && (cadastro != null) && (cadastro != NaN)){
            res.render("atualizarCadastro",{
                cadastro: cadastro
            })
        }else{
            res.redirect("/consultar")
        }
    })
})


router.post("/atualizarCadastro", (req, res)=>{
    let id = req.body.id;
    let nome = req.body.nome;
    let cep = req.body.cep;
    let endereco = req.body.endereco;
    let bairro = req.body.bairro;
    let cidade = req.body.cidade;
    let uf = req.body.uf;
    let funcao = req.body.funcao;
    let cpf = req.body.cpf;

    Cadastro.update({nome: nome,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        funcao: funcao,
        cpf: cpf }, { 
        where: {
            id: id
        }
        
    }).then(()=>{
        res.redirect("/listAll")
    })
})


module.exports = router