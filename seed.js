const {
  db,
  Gardener,
  Plot,
  Vegetable} = require('./models');


db.sync()
  .then(()=>{
    // let gardener = new Gardener('andy', 25);
    // let plot = new Plot(100, true);
    // let veggie = new Vegetable('carrot', 'orange', new Date);
    // let promiseArr = [gardener, plot, veggie];
    let vegetables = [];
    for(let i = 0; i<10; i++){
      vegetables.push(new Vegetable({name:'carrot'+i, color: 'orange', planted_on: new Date}));
      // veggies.push(new Vegetable({name: 'carrot' + i, color: 'orange', planted_on: new Date, vegetableId: }));
      // plots.push(new Plot({size: i, shaded: true}));
    }
    let vegetablePromiseAll = Promise.all(vegetables);
    return vegetablePromiseAll; //array of successful vegetable promises
  }).then(promiseAllParam()=>{
    for (var x in vegetablePromiseAll){

    }
  })
  .then(()=>{})
  // .then(dbEntries => { dbEntries.save() })
  // .then(function(){ console.log('all promises succeeded')})
  // .then(()=>{
  //   db.close();
  // })
  .catch((err)=>{
    console.log(err);
    db.close();
  });
// let promiseArr = [gardeners, veggies, plots];
// return Promise.all(promiseArr);

// .then((results)=>{
//   results[1].forEach(result => result.save());
//   results[0].forEach(result => result.save());
//   results[2].forEach(result => result.save());
// })
