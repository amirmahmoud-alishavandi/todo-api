const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Database',(err,db) => {
  if (err) {
    console.log('Unable to Connect to the Database.');
  }
    console.log('Connetion Successful.');

  // // deleteMany
  // db.collection('Todos').deleteMany({todos:'Eat Lunch'}).then((err,result) => {
  //   if (err) {
  //     console.log('Unable to delete.');
  //   }
  //     console.log(result);
  // });

  // //deleteOne
  // db.collection('Todos').deleteOne({todos:'Eat Lunch'}).then((err,result) => {
  //   if (err) {
  //     console.log('Unable to Delete the Requested Item');
  //   }
  //     console.log(result);
  // });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({todos:'Eat Lunch'}).then((err,result) => {
    if (err) {
      console.log('Unable to Delete');
    }
      console.log(JSON.stringify(result,undefined,2));
  });
});
