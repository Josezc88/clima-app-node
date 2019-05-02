const axios = require('axios');
const API_KEY = 'bc29fca00966f1e1f9db9ed9c2bf81ee';


const getClima = async(lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    const resp = await axios.get(url);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}