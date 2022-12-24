const express = require("express"); // chamando o express.
const app = express(); // colocando o express numa variável.
const connection = require("./database/connection");
const cadastroController = require("./cadastro/cadastroController");
const consultaController = require("./consulta/consultaController");

//database
connection
    .authenticate()
    .then(()=>{
        console.log("conexão feita com o banco de dados!")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })

app.listen(8080,()=>{console.log("App Rodando!")}) //criando a porta (servidor de escuta)


app.set('view engine','ejs'); // dizendo pro express que a view engine a ser utilizada é o ejs.
app.use(express.static('public')); //informando pro express onde estão os arquivos estáticos.

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rotas
app.use("/", cadastroController);
app.use("/", consultaController);

app.get("/",(req,res)=>{
    res.render("index")  //renderizando a página index
})