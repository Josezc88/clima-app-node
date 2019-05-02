const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '8b821ce24bmsh0611966e7e0d599p1189d3jsn9a9a208b5217' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
}