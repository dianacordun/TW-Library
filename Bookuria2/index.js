var express=require('express');
var app=express();
//var nodemailer = require('nodemailer');
var fs = require('fs');
var formidable=require('formidable');

app.use(express.static("carti"));
app.use(express.static("librarie"));

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/librarie/index.html');
});

/*
app.post('/adauga', function(req, res) {
  var form = new formidable.IncomingForm({ uploadDir: 'carti', keepExtensions: true })

  //var ob;
  var date = fs.readFileSync("librarie/clienti.json");
  x = JSON.parse(date);

  form.parse(req, function(err, fields, files) {
    var formular = { client: fields.Nume, email: fields.Email, poza: files.Poza.path.substring(5) };
    x.push(formular);
    fs.writeFileSync("librarie/clienti.json", JSON.stringify(x));

    res.send("Am adaugat clientul " + fields.Nume);
  });

});
*/

/*
app.use('/mail', express.urlencoded({ extended: true }));

app.post('/mail', function(req, res) {

  var nume = req.body.Nume;
  var mail = req.body.Email;

  var transporter = nodemailer.createTransport({        
    service: 'gmail',
    auth: {
      user: 'my.mail.node@gmail.com',
      pass: 'nodemailer'
    },
    tls: { rejectUnauthorized: false }

  });
     

  var mailOptions = {                                       
    from: 'my.mail.node@gmail.com',
    to: 'diana.cordun@s.unibuc.ro',
    subject: 'Recomandări literare',
    text: "Bună, "+nume+"!\n Nu mai știi ce să citești? Ai mai jos câteva recomandări din partea echipei noastre! Toate titlurile sunt disponibile în librăria noastră! \n În funcție de genul literar favorit, îți recomandăm să citești: \n Thriller: 'Victimă fără chip'-Stefan Ahnhem \n Ficțiune istorică: 'O mare de lacrimi'-Ruta Sepetys \n Romance: 'Totul se termină cu noi'-Colleen Hoover \n Science Fiction: 'Furia roșie'-Pierce Brown \n Fantasy: 'Războiul Macului'-R.F.Kuang \n Mister: 'Inspecție'-Josh Malerman \n Toate cele bune, echipa librăriei BOOKURIA"
  };

  transporter.sendMail(mailOptions, function(error, info) {          
    if (error) {
      alert(error);
    } else {
      alert('Mail trimis: ' + info.response);
    }
  });
  res.send("Trimis");
});
*/
app.use(function(req,res){
  res.status(404).sendFile(__dirname +'/librarie/404.html');
});
app.listen(8000, function() {

  console.log("Serverul a pornit");

});
