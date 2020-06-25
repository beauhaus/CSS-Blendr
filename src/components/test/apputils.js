import Dexie from 'dexie';

//RANDOM NUMBER GENERATOR
const RNG = () => {
  var base_random = Math.random();
  return (() => {
    var scaled_base_rand = (base_random * 100) / 3;
    var scaled_base_int = Math.floor(scaled_base_rand);
    var rando = scaled_base_rand - scaled_base_int;
    return rando;
  })();
};

// Returns a 5 digit random int
 const shortRand = () => {
  const result = Math.floor(RNG() * 100000);
  return result;
};

// set USRIMAGE DATABASE
 const createUsrImageDB = () => {
  const db = new Dexie("UsrImageDB")
  //create db store
  db.version(1).stores({
    //a table cust named usrImages...1st csv value is "primary key"
    usrImages: "id, fileName, url, tag, top, bot"
  })
  db.open().catch((err) => {
    console.log("db err: ", err.stack || err);
  })
return db;

}

// const usrPicsReducer = (state, action) => {
//   switch (action.type) {
//     case 'POPULATE_PICS':
//       return action.pics
//     case 'ADD_PIC':
//       return [
//         ...state,
//         { title: action.title, text: action.text }
//       ]
//     case 'REMOVE_PIC':
//       return state.filter((pic) => pic.title !== action.title) // pic.id?
//     default:
//       return state
//   }
// }

export {createUsrImageDB, shortRand};
