const express = require("express");
const router = express.Router();
const Consulta = require("./consulta")

router.get("/consultar",(req,res)=>{
    res.render("consultar")
})

router.get("/listAll",(req,res)=>{
    Consulta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(cadastro => {
        res.render("listAll",{
            cadastro: cadastro
        });
    }) 
})

/***pegando o cpf consultado e verificando no banco de dados*******/
router.post("/consultaOne",(req, res)=>{
    let cpf = req.body.cpf
    Consulta.findAll({ // o findOne procura 1 registre
        where: {cpf:cpf} // comparando se no banco o cpf é igual o cpf da váriavel digitada
    }).then(cadastro => {
        if((cadastro != undefined) && (cadastro != null) && (cadastro != NaN)){
            res.render("consultaOne",{
                cadastro: cadastro
            })
        }else{
            res.redirect("/consultaOne")
        }
    })
})



module.exports = router