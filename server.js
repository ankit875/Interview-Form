const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser')
const ejs= require('ejs')
const app= express();
const Record =require('./models/Record')

const MONGO_URL= 'mongodb://localhost:27017/simpleapp'
mongoose.connect(MONGO_URL);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');

app.post('/submit', (req, res) =>{
    
    const {purpose, otherCity, address, interviewer, interviewee, email, phone, date, randomfield} = req.body
    let {city}= req.body;
    if(city=== 'Elsewhere'){
        city=otherCity
    }
    const record= new Record({purpose, city, address, interviewer, interviewee, email, phone, date, randomfield})
    record.save((err,data) =>{
        if(err){
            console.log('Error Occured: ', err)
        }
        else{
            res.redirect('/data')
        }
    })
})

app.get('/data', (req, res) =>{
    let result = null;
    let temp = null;
    let x = null;
    Record.find({}, (err, data) =>{
        result= data.map(r =>{
            if(r.interviewer.length >= 12){
                temp= r.interviewer.split(' ')
                if(temp.length>1){
                    x= temp[0]+ ' '+ temp[temp.length-1].charAt(0).toUpperCase()+'.';
                    r.interviewer=x;
                }
            }
            if(r.interviewee.length >= 12){
                temp= r.interviewee.split(' ')
                if(temp.length>1){
                    x= temp[0]+ ' '+ temp[temp.length-1].charAt(0).toUpperCase()+'.';
                    r.interviewee=x;
                }
            }
        })
        if(err){
            console.log('Error ocurred!')
            res.status(500).json({"message": "Internal message error"});
        }
        else res.render('index', {data: data})
    })
})

app.listen('3006', () => console.log('Server is starting port 3006'))