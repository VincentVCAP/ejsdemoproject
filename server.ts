import express from "express";
import ejs from "ejs";
import { resolve } from "path";

const app = express();

app.set("view engine", "ejs"); 
app.set("port", 3000);
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render('index', 
    {
        planet: "Pluto"
    });
});

app.get("/random",(req,res)=>{
    let randomGetal = Math.random()*100;
    res.type("text/html");
    res.send(`Het random getal is ${randomGetal}`);
});
app.get("/helloworld",(req,res)=>{
    res.type("text/html");
    res.send("Hello World")
});
app.get("/goodbye",(req,res)=>{
    res.type("text/html");
    res.send("Later <strong>World</strong>")
});


interface Person {
    name: string;
    age: number;
}

const data : Person[] = [
    {   
        name: 'george',
        age: 50
    },
    {   
        name: 'jane',
        age: 32
    },
    {   
        name: 'john',
        age: 42
    },
];

app.get('/getData',(req,res)=>{
    res.type('application/json');
    res.json(data);
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);