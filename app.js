const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

// const getInfo = (direccion) => {
//     return lugar.getLugarLatLng(argv.direccion)
//         .then(data => {
//             return clima.getClima(data.lat, data.lng);
//         })
//         .catch(err => { return err; });
// };

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return temp;
    } catch (error) {
        return error;
    }
};

getInfo(argv.direccion)
    .then(temp => console.log(`El clima de ${argv.direccion} es ${temp}`))
    .catch(err => console.log(`No se pudo determinar el clima de ${argv.direccion}`, err));