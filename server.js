

const mysql = require('mysql')
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];


class Konto{
    constructor(){
        this.IdKunde
        this.Kontonummer
        this.Kontoart
        this.Iban
    }
}



class Kunde {
    constructor(){
        this.IdKunde
        this.Kennwort
        this.Vorname
        this.Geburtsdatum
        this.Nachname
        this.Adresse
        this.Geschlecht        
        this.Mail
    }
}

// Deklaration (let kunde) und Instanziierung
// = new Kunde()
// Bei der Instanzziierung werden Speicher-
// zellen reserviert.

let kunde = new Kunde()

// Initialisierung

kunde.IdKunde = 150000
kunde.Kennwort = "123"
kunde.Geburtsdatum = "1999-12-31"
kunde.Nachname = "Müller"
kunde.Vorname = "Hildegard"
kunde.Geschlecht = "w"
kunde.Mail = "h.mueller@web.de"
const iban = require('iban')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const validator = require("email-validator");

const dbVerbindung = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.db
})





// Kunde in die Datenbank schreiben, sofern er noch nicht angelegt ist


const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})


app.get('/',(req, res, next) => {   
        
        res.render('index.ejs', {                              
        })
})


app.get('/hilfebereich',(req, res, next) => {   

    
        
        res.render('hilfebereich.ejs', {                              
        })
})






app.get('/Aufgabe1',(req, res, next) => {   

    
    
   
        
        res.render('Aufgabe1.ejs', {    
            meldung : ""                          
        })
})

app.post('/Gertig',(req, res, next) => {   

   // Beim drücken des Buttons soll für errechnet werden wie viel Geld du nach 12 Monaten hast, 
   //wenn du jeden monat 100 Euro sparst.
   // Ersetze die Fragezeichen mit den richtigen Werten um die Aufgabe zu lösen 
    // Entferne später die Kommentarzeichen, um zu schauen ob die Website auch wirklich funktioniert. 


   // var Anfangskapital = 0;
   // var Monat = 1;
   // var endkapital = Anfangskapital;

   // for (?? ; ?? <= ?? ; ??+  ){
   //     ?? = ?? + 100
    
   // } 
     //       res.render('Aufgabe1.ejs', {                              
      //          meldung :  ??
      //      })
     })
   

app.get('/Aufgabe2',(req, res, next) => {   

    
        
        res.render('Aufgabe2.ejs', {   
            meldung : "" 
        })
})

app.post('/Aufgabe2',(req, res, next) => {   

    
    var sparbetrag = req.body.sparbetrag
  //  var anfangskapital = req.body.??
  //  var laufzeit = req.body.??
    var endkapital = anfangskapital



    for(laufzeit; laufzeit > 0 ;laufzeit--){
    // Formel ?


    res.render('Aufgabe2.ejs', {                              
        Feldung : "Der Endbetrag nach " + laufzeit +  " Monaten, beträgt " + endkapital + "€."
    })

    }
})


app.post('/HilfeAufgabe1',(req, res, next) => {   

    
    res.render('Hilfe1.ejs', {                              
    })
})


app.post('/HilfeAufgabe2',(req, res, next) => {   

    
    res.render('Hilfe2.ejs', {                              
    })
})

app.get('/HilfeAufgabe1',(req, res, next) => {   

   
        
    res.render('Hilfe1.ejs', {    
    })
})

app.get('/HilfeAufgabe2',(req, res, next) => {   

   
        
    res.render('Hilfe2.ejs', {    
    })
})
 



