express = require('express');
path = require ('path');
mongoose = require('mongoose');
createError = require('http-errors')
cors = require('cors');
bodyParser =require('body-parser');
const app = express();
const temper = require('./model/temphum.model');
const patient= require('./model/patient.model');
const http = require('http');
const server = http.createServer(app);
const { ErrorEvent } = require('events');
const { Server } = require("socket.io");




//Here we will avoid Mongoose warming (strictQuery will be 'false')
mongoose.set('strictQuery', true);

//Here we are connecting to data base mongoDb by mongoose
mongoose.connect('mongodb+srv://kdija:kadi26@cluster0.wvdwois.mongodb.net/personne',
//mongoose.connect( "mongodb+srv://papa:2605@cluster0.wepa2rr.mongodb.net/homestead?retryWrites=true&w=majority", 
{useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échoué !'));

//Here are adding the constant 'app' using express
/**/





//Here are managing body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: false
}));
//Here are managing CORS sécurity
app.use(cors({origin: "*"}));


//Here we are managing endpoint for access to user model
const userRoute = require('./routes/user.route');
app.use('/endpoint',userRoute);

//Here we are managing server's port (using which are giving by the system or 3000)
const port = process.env.PORT || 3000;
// const port = 8000;
 server.listen(port,() => {
    console.log('Port connected to: ' + port)
});

//initialisation socket
 var io = require("socket.io")(server); 
io = require('socket.io')(server, 
    {     cors: 
        {origin: "*",
        methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
        credentials: false     }   
    }); 

//this middelware catch errors when the URL for endpoint is not correct and send them to the next
app.use((req,res,next) =>{
    next( (404))
});

app.get('/',(req,res) => {
    res.send('invalid endpoint')
});

app.use((err,req,res,next) =>{
    if (!err.statusCode) ErrorEvent.statusCode = 500;
    res.status(err.statutsCode).send(err.message);
});


//température et humidité
/* */

/* io.on('connection', () => {
    console.log('a user connected');
  });
parser.on('data', (data)=>{

    io.emit('temp',data)
})  */

  var Serialport = require('serialport');
 const { error } = require('console');
 var Readline = Serialport.parsers.Readline;
  var serialport=`require('serialport')`;
 var port2 = new Serialport('/dev/ttyACM0', {
      baudRate: 9600
 });

  const parser = port2.pipe(new Readline({ delimiter: '\r\n' })) 
 console.log(parser);

 var temoin = '0';
/* io.on('connection', (socket) => {
    console.log('vent connected!');
    socket.on('vent', (arg)=>{ 
        
        temoin = arg;
       
    console.log(arg) 
       
    })
  }); */
   
  parser.on("data", (data)=>{
    console.log(data);
   
 
const Data = temper;
  //calcul de la date et l'heure 


io.emit('temp', data);




 
 //port2.write(temoin);
 //console.log(temoin);

                    
});