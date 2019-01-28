 const MongoClient= require('mongodb');

 MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,db)=>{

 	if (err) {
 		return console.log('Unable to connect');
 	}
         
    const mydb= db.db('TodoApp');
 	console.log('connected to db');

 	mydb.collection('Todos').find({completed:true}).toArray().then((docs)=>{

 		console.log(JSON.stringify(docs,undefined,2));
 	},(err)=>{

 		 		console.log('Unable to fetch todos',err);

 	});

 	db.close()
 });