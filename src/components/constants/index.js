
export const options = {
    method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.027884',
    bl_lng: '27.452069',
    tr_lat: '41.506626',
    tr_lng: '43.113189',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': 'd2dabe4a39msh50a900c09dc67dep12da80jsn0978bd0ff9b8',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};

export const options2 = {
  headers: {
    'X-RapidAPI-Key': 'd2dabe4a39msh50a900c09dc67dep12da80jsn0978bd0ff9b8',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};


// const options = {

//   url: 'https://flight-radar1.p.rapidapi.com/aircrafts/list',
//   headers: {
//     'X-RapidAPI-Key': 'd2dabe4a39msh50a900c09dc67dep12da80jsn0978bd0ff9b8',
//     'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
//   }
// };