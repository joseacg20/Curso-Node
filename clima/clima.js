const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4235256c472d4ca247d440d4529b315a&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}