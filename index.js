const PORT = process.env.PORT || 3000;
const path = require("path");
const ejs = require("ejs");
const cors = require("cors");
const mongoose = require("mongoose");
let cont=0;
//Crear Schema
const schema= mongoose.Schema;
const Login = new mongoose.Schema({
    Usuario:String,
    Password: String
});
const sede2 = new mongoose.Schema({
    Nombre:String,
    Curso:String,
    TotalVotos: Number
});
const sede3 = new mongoose.Schema({
    Nombre:String,
    Curso:String,
    TotalVotos: Number
});
const sede4 = new mongoose.Schema({
    Nombre:String,
    Curso:String,
    TotalVotos: Number
});
const Personero = new mongoose.Schema({
    Nombre:String,
    TotalVotos: Number
});
const ConsejoEstudiantil = new mongoose.Schema({
    Nombre:String,
    Curso:String,
    TotalVotos: Number
});
const Personeros= mongoose.model("Personeros",Personero)
const Logs = mongoose.model("Logs",Login);
const Sede2 = mongoose.model("Sede2",sede2);
const Sede3 = mongoose.model("Sede3",sede3);
const Sede4 = mongoose.model("Sede4",sede4);
const consejo = mongoose.model("ConsejoEstudiantil",ConsejoEstudiantil);
const express = require("express");
const morgan = require("morgan");
const { urlencoded } = require("express");
const app = express();
app.set("view engine","ejs");
app.set("views",  "views");
app.use(morgan("short"));
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')))
mongoose.connect("mongodb+srv://alecio:Ru2gUiAvHQhlQvW4@cluster0.vn0iy.mongodb.net/Estudiantes?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{console.log("base de datos conectada...")
    })
    .catch((e)=>{console.log(e)})
app.get("/", async(req,res)=>{
    try {
        res.render("index");
    } catch (error) {
        console.log(error)
    }
});
app.use(express.json())
app.use(urlencoded({extended:false}))
app.post("/validar", async(req,res)=>{
    try {
        const datosDB = await Logs.find();
        switch (req.body.usuario){
            case "sede1":
            if (datosDB[0].Password==req.body.password){
                res.render("sede1");
                break;
            }else{
                res.render("index")
                break;
            }
            break;
            case "sede2":
            if (datosDB[1].Password==req.body.password){
                res.render("sede2");
                break;
            } else{
                res.render("index")
                break;
            }
            break;
            case "sede3":
            if (datosDB[2].Password==req.body.password){
                res.render("sede3");
                break;
            } else{
                res.render("index")
                break;
            }
            break;
            case "sede4":
            if (datosDB[3].Password==req.body.password){
                res.render("sede4");
                break;
            } else{
                res.render("index")
                break;
            }
            
            break;
            default:
                res.render("index")
                break;
        }
        
    } 
    catch (error) {
        console.log(error)
    }
});
app.post("/registrar", async(req,res)=>{
    try {
        const datos = req.body.nombre
        const DB = Personeros.find()
        const cont= await Personeros.findOne({Nombre:req.body.nombre},"TotalVotos")
        if (datos=="paola"){ 
            DB[0] = await Personeros.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
            }
        if (datos=="karla"){ 
            DB[1] = await Personeros.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
            }
        if (datos=="freddy"){ 
            DB[2] = await Personeros.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
            }
        res.render("sede1")
        } catch (error) {
        console.log(error)
    }
});
app.post("/consejo", async(req,res)=>{
    try {
        const datos = req.body.nombre
        const DB =  consejo.find()
        const cont= await consejo.findOne({Nombre:req.body.nombre},"TotalVotos")
        //sexto
        if (datos=="Ana"){ 
            DB[0] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
            }
        if (datos=="Nicole"){ 
            DB[1] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
             }
        if (datos=="Isabel"){ 
            DB[2] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Camila"){ 
            DB[3] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Yulianis"){ 
            DB[4] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         //septimo
         if (datos=="IsabelaR"){ 
            DB[5] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Maria Camila"){ 
            DB[5] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Marisol Murcia"){ 
            DB[6] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Marisol Quiroz"){ 
            DB[7] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         // octavos
         if (datos=="Mari Luna"){ 
            DB[8] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Jesus"){ 
            DB[9] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Jose David"){ 
            DB[10] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Arlis"){ 
            DB[11] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         //Novenos
         if (datos=="Luz Angela"){ 
            DB[12] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Ingrid"){ 
             DB[13] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Lina"){ 
           DB[14] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Judith"){ 
            DB[15] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         //decimos
         if (datos=="Pedro"){ 
            DB[16] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Thalia"){ 
            DB[17] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Letzy"){ 
            DB[18] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         /*if (datos=="Letzy"){ 
            DB[19] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }*/
        //Once
         if (datos=="Ronald"){ 
            DB[20] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Samantha"){ 
            DB[21] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Ana Milena"){ 
            DB[18] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
            res.render("sede1")
        } catch (error) {
        console.log(error)
    }
});
// sede2
app.post("/consejo2", async(req,res)=>{
    try {
        const datos = req.body.nombre
        console.log(datos)
        const DB =  Sede2.find()
        const cont= await Sede2.findOne({Nombre:req.body.nombre},"TotalVotos")
        console.log(cont.TotalVotos)
        //Tercero
        if (datos=="Antonella"){ 
            DB[0] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
            }
        if (datos=="Adriana"){ 
             DB[1] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
              }
        if (datos=="Dainis"){ 
             DB[2] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
        /* if (datos=="Briana"){ 
            DB[3] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }*/
         
         //Cuartos
         if (datos=="Rossi"){ 
            DB[4] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Isabella"){ 
            DB[5] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Maria Camila"){ 
            DB[6] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
          // Quintos
         if (datos=="Valentina"){ 
            DB[8] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Pamela"){ 
            DB[9] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         /*if (datos=="Keider"){ 
            DB[10] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }*/
        res.render("sede2")
         } catch (error) {
        console.log(error)
    }
});
//sede3
app.post("/consejo3", async(req,res)=>{
    
    try {
        const datos = req.body.nombre
        const DB =  Sede3.find()
        const cont= await Sede3.findOne({Nombre:req.body.nombre},"TotalVotos")
        //Tercero
        if (datos=="Dorlan"){ 
            DB[0] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
              }
        if (datos=="Yargelis"){ 
            DB[1] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
              }
        /*if (datos==""){ 
             DB[2] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }*/
          //Cuartos
         if (datos=="Paula"){ 
             DB[4] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Jose Angel"){ 
            DB[5] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         // Quintos
         if (datos=="Madelyn"){ 
             DB[8] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Maria Jose"){ 
             DB[9] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         
        res.render("sede3")
       } catch (error) {
        console.log(error)
    }
});
//sede4
app.post("/consejo4", async(req,res)=>{
    try {
        const datos = req.body.nombre
        const DB =  Sede4.find()
        const cont= await Sede4.findOne({Nombre:req.body.nombre},"TotalVotos")
        //Tercero
        if (datos=="Cristian"){ 
          DB[0] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Evan"){ 
            DB[1] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
           }
        //Cuartos
         if (datos=="Noha"){ 
             DB[2] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Ruben"){ 
            DB[3] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
        }
         // Quintos
         if (datos=="Luis"){ 
            DB[4] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
         if (datos=="Deivis"){ 
            DB[5] = await DB.findOneAndUpdate({Nombre:datos},{$set : {TotalVotos:cont.TotalVotos+1}});
         }
        res.render("sede4")
    } catch (error) {
        console.log(error)
    }
});
app.get("/admin",async (req,res)=>{
    const per = await Personeros.find({TotalVotos:{$gte: -1}})
    const s2 = await Sede2.find({TotalVotos:{$gte: -1}})
    const s3 = await Sede3.find({TotalVotos:{$gte: -1}})
    const s4 = await Sede4.find({TotalVotos:{$gte: 0}})
    const conse = await consejo.find({TotalVotos:{$gte: -1}})
    res.render("admin",{per:per,sede2:s2,principal:conse,sede3:s3,sede4:s4})
})
app	.listen(PORT,console.log("servidor escuchando en "+ PORT));