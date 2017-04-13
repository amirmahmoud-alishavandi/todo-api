const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err,db) => {
  if (err) {

    return console.log('Unable to connect to Database.');
  }
    console.log('Connettion to the Database Successful.');
    // db.collection('Todos').insertOne({
    //   todos: 'do something',
    //   compeleted : false
    // },(err,result) => {
    //   if (err) {
    //     return console.log('Unable to Write to the Database.');
    //   }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
    //   name:'amir',
    //   age:'25',
    //   location:'Iran'
    // },(err,result) => {
    //   if (err) {
    //     return console.log('Unable to Write to Database.');
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // });
    db.collection('Users').find({name:'amir'}).toArray().then((docs) => {
      console.log('Users: ');
      console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
      console.log('Unable to Print to fetch data.');
    });
    db.collection('Users').find({name:'amir'}).count().then((count) => {
      console.log(`There are ${count} Documents.`);
    },(err) => {
      console.log('Unable to count documents.');
    });
    //db.close();
});
