const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const capitalizedCity = capitalizeFirstLetter(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalizedCity}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const weather = response.data;
        const details = {
            temperature: weather.main.temp,
            feels_like: weather.main.feels_like,
            description: weather.weather[0].description,
            humidity: weather.main.humidity,
            wind_speed: weather.wind.speed,
            clouds: weather.clouds.all,
        };
        res.render('weather', { city: capitalizedCity, details });
    } catch (error) {
        console.error(error);
        res.render('error');
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
