const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Database',(err,db) => {
  if(err){
    console.log('Unable to connect to the Database.');
  }
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
});
