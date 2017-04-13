const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Database',(err,db) => {
  if (err) {
    return console.log('Unable to connect to Database.');
  }
    console.log('Connetion to the Database Successful.');

    db.collection('Todos').insertOne({
      todos: 'do something',
      compeleted : false
    },(err,result) => {
      if (err) {
        return console.log('Unable to Write to the Database.');
      }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.collection('Users').insertOne({
      name:'amir',
      age:'25',
      location:'Iran'
    },(err,result) => {
      if (err) {
        return console.log('Unable to Write to Database.');
      }
      console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
});
