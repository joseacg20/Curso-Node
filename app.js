const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el Clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatitudLongitud(argv.direccion)
//     .then(console.log);

// clima.getClima(30.820000, -115.169998)
//     .then(console.log)
//     .catch(console.log)

const geetInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatitudLongitud(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

geetInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)