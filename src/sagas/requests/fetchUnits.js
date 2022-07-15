const _url = './age-of-empires-units.json';

const fetchGetUnits = () => {
    return fetch(_url)
            .then(response =>  response.json())
            .catch(err => {
              // Do something for an error here
              console.log("Error Reading data " + err);
            });  
};

export default fetchGetUnits;