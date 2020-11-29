const fs = require('fs')
const leerJSON = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    allHero : (req,res)=>{
        let listaheroes = leerJSON;
        res.send(listaheroes)
    },
    buscar : (req,res)=>{
            let heroe = req.params.id;
            let busqueda = leerJSON.filter(hero => hero.id == heroe);
        
            if(busqueda.length ==! 0){
                busqueda.forEach(function(a){
                    res.send(`Nombre:  ${a.nombre} <br> Profesion:   ${a.profesion}`)
                });
            }else{
                res.write("Heroe no encontrado")
            }
        
            res.end()
    },
    bio : (req,res)=>{
        let heroe = req.params.id;
        let ok = req.params.ok;
        let nombre = leerJSON.filter(hero => hero.id == heroe)
        if (ok == "ok"){
            if(nombre.length ==! 0){
                nombre.forEach(function(a){
                    res.send(a.resenia);
                    res.send(ok);
                })
                res.end()
            }else {
                res.send("Error! Heroe no encontrado")
                res.send()
            }
        }else {
            if(nombre.length ==! 0){
                nombre.forEach(function(a){
                    res.write(a.nombre + " Lamento que no quieras saber nada de mi");
                })
                res.end()
            }else {
                res.send("Error! Heroe no encontrado")
                res.send()
            }
        }
        res.end();
    }
}

