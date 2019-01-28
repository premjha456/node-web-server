const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,db)=>{

	if (err) {
		return console.log('Unable to connect to mongodb');
	}

	console.log('Connected to mongodb');
    const mydb=db.db('TodoApp');
    
    mydb.collection('Todos').insertOne({
    	text:'Sone Text',
    	completed:false
    },(err,result)=>{
    	if (err) {
    		return console.log('Unable to insert ',err);
    	}

    	console.log(JSON.stringify(result.ops,undefined,2));
    });


    mydb.collection('users').insertOne({
    	name:'Prem Jha',
    	age:22,
        location:'Mumbai'
    },(err,result)=>{
    	if (err) {
    		return console.log('Unable to insert');
    	}

    	console.log(result.ops[0]._id.getTimestamp());
    });

	db.close(); 
});
