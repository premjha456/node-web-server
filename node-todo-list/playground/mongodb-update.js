 const MongoClient= require('mongodb').MongoClient;
 const ObjectID=require('mongodb').ObjectID;
 MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,db)=>{

 	if (err) {
 		return console.log('Unable to connect');
 	}
         
    const mydb= db.db('TodoApp');
 	console.log('connected to db');
    
    //findOneAndUpdate

    mydb.collection('Todos').findOneAndUpdate({ 
        _id: new ObjectID('5c4f255eb3896e17d898e129')},{
            $set:{
                completed:false
            }
        },{
            returnOriginal:false
        }).then(result=>{
            console.log(result);
        });
    


    mydb.collection('users').findOneAndUpdate({
        _id: new ObjectID('5c4c76053317c01bf59dd602')},{
        $set:{name:'Bilal',location:'Mumbai Central'
    }
    },{
        returnOriginal:false

    }).then(result=>{
        console.log(result);
    })

    db.close();
 });