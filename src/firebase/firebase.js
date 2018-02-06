import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };



// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 4500,
//     createdAt: '466646464646'
//   })
// }, 5000);

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childsnapshot) => {
//       expenses.push({
//         id: childsnapshot.key,
//         ...childsnapshot.val()
//       });
//   });
//   console.log(expenses);
// });

// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 4500,
//     createdAt: '466646464646'
//   })
// }, 5000);



// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childsnapshot) => {
//       expenses.push({
//         id: childsnapshot.key,
//         ...childsnapshot.val()
//       });
//   });
//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'This month rent',
//   amount: 60000,
//   createdAt: '01223645445'
// });



// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// setTimeout(() => {
//   database.ref('name').set('Inocencio');
// }, 3500);

// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// database.ref('location/city').once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data', e);
// });


// database.ref().set({
//   name: 'Amaury Kelly',
//   age: 40,
//   stressLevel: 6,
//   job: {
//     title: 'Designer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Houston',
//     country: 'Uinted States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This fail.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Yahoo',
//   'location/city': 'Seattle'
// });


// ADD TO DATABASE

// database.ref().set({
//   name: 'Amaury Kelly',
//   age: 40,
//   isSingle: false,
//   location: {
//     city: 'Houston',
//     country: 'Uinted States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This fail.', e);
// });

// // database.ref().set('This is my data');

// // database.ref('age').set(39);
// // database.ref('location/city').set('Boston');

// database.ref('attributes').set({
//   height: 71,
//   weight: 190
// }).then(() => {
//   console.log('Attributes were saved!');
// }).catch((e) => {
//   console.log('Operation fail', e);
// });

// REMOVE FROM DATABASE

// database.ref()
// .remove().then(() => {
//   console.log("Remove succeeded.")
// }).catch((error) => {
//   console.log("Remove failed: " + error.message)
// });

// database.ref('isSingle').remove()
// .then(() => {
//   console.log("Remove succeeded.")
// }).catch((error) => {
//   console.log("Remove failed: " + error.message)
// });

// database.ref('isSingle').set(null);
