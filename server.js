const express =require('express');
const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{


})

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:'Home Page',
		welcomeMessage:'Welcome to home page',
		currentYear: new Date().getFullYear()
			});
});

app.get('/about',(req,res)=>{
 res.render('about.hbs',{
 	pageTitle:'About Page',
 	currentYear:new Date().getFullYear()
 });
});

app.get('/prem',(req,res)=>{
      res.send('Hello Prem');
});

app.listen(3000); 