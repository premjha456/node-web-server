const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

var id='5c4f53d3f367541504554fc9';

// Todo.find({_id:id}).then((todos)=>{
// 	console.log('Todos',todos);
// });


Todo.find({completed:false}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({completed:false}).then((todo)=>{
	console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{

	if (!todo) {
		return console.log('Id not found');
	}
	console.log('Todo by id',todo);
}).catch((e)=>{console.log(e);});


User.findById(id).then((User)=>{

	if (!user) {
		return console.log('Id not found');
	}
	console.log('User by id',user);
}).catch((e)=>{console.log(e);}); 