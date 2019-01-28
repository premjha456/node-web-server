 const MongoClient= require('mongodb');

 MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,db)=>{

 	if (err) {
 		return console.log('Unable to connect');
 	}
         
    const mydb= db.db('TodoApp');
 	console.log('connected to db');
    
    //deleteMany
    mydb.collection('Todos').deleteMany({text:'Sone Text'}).then((result)=>{
    	console.log(result);
    });

    //deleteOne
    mydb.collection('Todos').deleteOne({text:'Some Text'}).then(result=>{
    	console.log(result);
    });

    //findOneAndDelete
 	mydb.collection('Todos').findOneAndDelete({completed:false}).then(result=>{
    	console.log(result);
    });

 	db.close();
 });