const axios = require('axios');

const getLugarLatitudLongitud = async(direccionUser) => {

    const encodeUlr = encodeURI(direccionUser);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'X-RapidAPI-Key': '656986fd3dmshbeacc69a862f7f1p153bd2jsnf2e3fa5579c7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resiltados para ${direccionUser}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatitudLongitud
}