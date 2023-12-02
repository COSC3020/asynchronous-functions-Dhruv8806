
const async = require('async');

    function countAsync(array, key, callback) {
      if (array.length === 0) {
        return process.nextTick(() => {
          callback(new Error('Array is empty.'));
        });
      }
    
      const countMatches = (element, cb) => {
        async.filter([element], (item, done) => {
          done(null, item === key);
        }, (err, results) => {
          if (err) {
            return cb(err);
          }
          cb(null, results.length);
        });
      };
    
      async.reduce(array, 0, (total, element, done) => {
        countMatches(element, (err, count) => {
          if (err) {
            return done(err);
          }
          done(null, total + count);
        });
      }, (err, result) => {
        if (err) {
          return callback(err);
        }
        callback(null, result);
      });
    }

    // Example array:
    // const array = [1, 3, 4, 2, 5, 2, 6, 2, 7, 8, 9, 4, 5];
    // const key = 5;
    
    // countAsync(array, key, (err, result) => {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(`The key ` + key + ` appears ` + result + ` times in the array. `);
    //   }
    // });




    // Sources Used: 
    // https://xgrommx.github.io/rx-book/content/mappingr_rxjs_from_different_libraries/async/index.html
    // TA
    
    

