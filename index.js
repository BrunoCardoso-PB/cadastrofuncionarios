const express = require("express"); // chamando o express.
const app = express(); // colocando um express numa variável.
const connection = require("./database/database");
const Cadastro = require("./database/Cadastro");

//database
connection
    .authenticate()
    .then(()=>{
        console.log("conexão feita com o banco de dados!")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })

app.set('view engine','ejs'); // dizendo pro express que a view engine a ser utilizada é o ejs.

app.use(express.static('public')); //informando pro express onde estão os arquivos estáticos.

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/",(req,res)=>{
    res.render("index")  //renderizando a página index
})

app.get("/cadastrar",(req,res)=>{
    res.render("cadastrar")
})

app.get("/consultar",(req,res)=>{
    res.render("consultar")
})

app.get("/listAll",(req,res)=>{
    Cadastro.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(cadastro => {
        res.render("listAll",{
            cadastro: cadastro
        });
    }) 
})

/***pegando o cpf consultado e verificando no banco de dados*******/
app.post("/consultaOne",(req, res)=>{
    let cpf = req.body.cpf
    Cadastro.findAll({ // o findOne procura 1 registre
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

app.get("/deletarcadastro/:id",(req,res)=>{
    let id = req.params.id
    Cadastro.destroy({
        where: {id:id}
    }).then(cadastro => {
        if(cadastro != undefined){
            res.redirect("/listAll")
        }
    })
})
/****************************************** */
app.post("/salvarcadastro",(req,res)=>{
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let bairro = req.body.bairro;
    let cidade = req.body.cidade;
    Cadastro.create({
        nome: nome,
        cpf: cpf,
        bairro: bairro,
        cidade: cidade,
    }).then(()=>{
        res.redirect("/cadastrar")
    })
})

app.listen(8080,()=>{console.log("App Rodando!")}) //criando a porta (servidor de escuta)


